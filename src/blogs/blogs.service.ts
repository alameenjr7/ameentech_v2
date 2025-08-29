import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogDto, UpdateBlogDto } from '../../libs/dto/blog.dto';
import { SearchDto } from '../../libs/global/search.dto';
import { SharpService } from '../../libs/sharp/sharp.service';
import { promises as fs } from 'fs';
import { sharpConfig } from '../../libs/sharp/sharp.config';

@Injectable()
export class BlogsService {
  constructor(
    private prisma: PrismaService,
    private sharpService: SharpService,
  ) {}

  async create(createBlogDto: CreateBlogDto, file?: Express.Multer.File) {
    try {
      let imageFilename: string | null = null;

      if (file && file.buffer) {
        // On passe le buffer et le nom original au service
        imageFilename = await this.sharpService.resizeImage(
          file.buffer,
          file.originalname,
        );
      }

      return await this.prisma.blogs.create({
        data: {
          ...createBlogDto,
          image: imageFilename || '', // champ image dans le modèle Blog
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Erreur lors de la création du blog');
    }
  }

  async findAll(searchDto?: SearchDto) {
    const {
      q,
      order_by = 'createdAt',
      order_dir = 'desc',
      limit,
      offset,
    } = searchDto || {};

    const where: any = {};

    if (q) {
      where.OR = [
        { title: { contains: q } },
        { category: { contains: q } },
        { excerpt: { contains: q } },
      ];
    }

    const orderBy: any = {};
    if (order_by === 'title') {
      orderBy.title = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.blogs.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Error retrieving blog posts');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    try {
      const blog = await this.prisma.blogs.findUnique({
        where: { id },
      });

      if (!blog) {
        throw new NotFoundException(`Blog post with ID ${id} not found`);
      }

      return blog;
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new BadRequestException('Error retrieving blog post');
    }
  }

  async update(
    id: number,
    updateBlogDto: UpdateBlogDto,
    file?: Express.Multer.File,
  ) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    const blogPost = await this.findOne(id); // Récupère les données actuelles (et vérifie l'existence)

    const dataToUpdate: any = { ...updateBlogDto, updatedAt: new Date() };

    if (file && file.buffer) {
      // 1. Traiter la nouvelle image
      dataToUpdate.image = await this.sharpService.resizeImage(
        file.buffer,
        file.originalname,
      );

      // 2. Supprimer l'ancienne image si elle existe
      if (blogPost.image) {
        try {
          const oldImagePath = sharpConfig.getOutputPath(blogPost.image);
          await fs.unlink(oldImagePath);
        } catch (error) {
          // Ne pas bloquer la requête si la suppression échoue (ex: fichier déjà supprimé)
          console.error(
            `Impossible de supprimer l'ancienne image : ${blogPost.image}`,
            error,
          );
        }
      }
    }

    try {
      return await this.prisma.blogs.update({
        where: { id },
        data: dataToUpdate,
      });
    } catch (error) {
      throw new BadRequestException('Error updating blog post');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.blogs.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Error deleting blog post');
    }
  }
}
