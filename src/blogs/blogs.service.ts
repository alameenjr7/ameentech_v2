import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogDto, UpdateBlogDto } from '../../libs/dto/blog.dto';
import { SearchDto } from '../../libs/global/search.dto';

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) {}

  async create(createBlogDto: CreateBlogDto) {
    try {
      return await this.prisma.blogs.create({
        data: {
          ...createBlogDto,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error creating blog post');
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
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Error retrieving blog post');
    }
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.blogs.update({
        where: { id },
        data: {
          ...updateBlogDto,
          updatedAt: new Date(),
        },
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
