import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AboutDto, UpdateAboutDto } from '../../libs/dto/about.dto';
import { SearchDto } from 'libs/global/search.dto';
import { SharpService } from '../../libs/sharp/sharp.service';
import { promises as fs } from 'fs';
import { sharpConfig } from '../../libs/sharp/sharp.config';

@Injectable()
export class AboutService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly sharpService: SharpService,
  ) {}

  async create(data: AboutDto, file?: Express.Multer.File) {
    const createData: any = {
      ...data,
      paragraphs: JSON.stringify(data.paragraphs),
      stats: JSON.stringify(data.stats),
    };

    if (file && file.buffer) {
      createData.imageUrl = await this.sharpService.resizeImage(
        file.buffer,
        file.originalname,
      );
    }

    const created = await this.prisma.about.create({ data: createData });
    return {
      ...created,
      paragraphs: JSON.parse(created.paragraphs),
      stats: JSON.parse(created.stats),
    };
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
      where.OR = [{ title: { contains: q } }, { stats: { contains: q } }];
    }

    const orderBy: any = {};
    if (order_by === 'title') {
      orderBy.title = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.about.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Error retrieving About');
    }
  }

  async findOne(id: number) {
    const about = await this.prisma.about.findUnique({ where: { id } });
    if (!about) throw new NotFoundException('About not found');
    return {
      ...about,
      paragraphs: JSON.parse(about.paragraphs),
      stats: JSON.parse(about.stats),
    };
  }

  async update(id: number, data: UpdateAboutDto, file?: Express.Multer.File) {
    const about = await this.prisma.about.findUnique({ where: { id } });
    if (!about) throw new NotFoundException('About not found');

    const updateData: any = {
      ...data,
      paragraphs: data.paragraphs
        ? JSON.stringify(data.paragraphs)
        : about.paragraphs,
      stats: data.stats ? JSON.stringify(data.stats) : about.stats,
    };

    if (file && file.buffer) {
      updateData.imageUrl = await this.sharpService.resizeImage(
        file.buffer,
        file.originalname,
      );
      if (about.imageUrl) {
        try {
          const oldImagePath = sharpConfig.getOutputPath(about.imageUrl);
          await fs.unlink(oldImagePath);
        } catch (error) {
          console.error(
            `Impossible de supprimer l'ancienne image : ${about.imageUrl}`,
            error,
          );
        }
      }
    }

    const updated = await this.prisma.about.update({
      where: { id },
      data: updateData,
    });
    return {
      ...updated,
      paragraphs: JSON.parse(updated.paragraphs),
      stats: JSON.parse(updated.stats),
    };
  }

  async remove(id: number) {
    const about = await this.prisma.about.findUnique({ where: { id } });
    if (!about) throw new NotFoundException('About not found');
    return this.prisma.about.delete({ where: { id } });
  }
}
