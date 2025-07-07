import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AboutDto, UpdateAboutDto } from '../../libs/dto/about.dto';

@Injectable()
export class AboutService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: AboutDto) {
    const createData = {
      ...data,
      paragraphs: JSON.stringify(data.paragraphs),
      stats: JSON.stringify(data.stats),
    };
    const created = await this.prisma.about.create({ data: createData });
    return {
      ...created,
      paragraphs: JSON.parse(created.paragraphs),
      stats: JSON.parse(created.stats),
    };
  }

  async findAll(searchDto: import('../../libs/global/search.dto').SearchDto) {
    const { q, order_by = 'created_at', order_dir = 'desc', limit, offset } = searchDto;

    const where = q
      ? {
          OR: [
            { title: { contains: q, mode: 'insensitive' } },
            { description: { contains: q, mode: 'insensitive' } },
          ],
        }
      : {};

    const abouts = await this.prisma.about.findMany({
      where,
      orderBy: { [order_by]: order_dir },
      take: limit,
      skip: offset,
    });

    return abouts.map((about) => ({
      ...about,
      paragraphs: JSON.parse(about.paragraphs),
      stats: JSON.parse(about.stats),
    }));
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

  async update(id: number, data: UpdateAboutDto) {
    const about = await this.prisma.about.findUnique({ where: { id } });
    if (!about) throw new NotFoundException('About not found');
    const updateData = {
      ...data,
      paragraphs: data.paragraphs ? JSON.stringify(data.paragraphs) : about.paragraphs,
      stats: data.stats ? JSON.stringify(data.stats) : about.stats,
    };
    const updated = await this.prisma.about.update({ where: { id }, data: updateData });
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
