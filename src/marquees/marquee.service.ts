import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SearchDto } from '../../libs/global/search.dto';
import { CreateMarqueeDto, UpdateMarqueeDto } from 'libs/dto/marquee.dto';

@Injectable()
export class MarqueesService {
  constructor(private prisma: PrismaService) {}

  async create(createMarqueeDto: CreateMarqueeDto) {
    try {
      return await this.prisma.marquee.create({
        data: {
          ...createMarqueeDto,
          items: JSON.stringify(createMarqueeDto.items),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error creating Marquee');
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
      where.OR = [{ question: { contains: q } }, { answer: { contains: q } }];
    }

    const orderBy: any = {};
    if (order_by === 'question') {
      orderBy.question = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.marquee.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Error retrieving Marquees');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    try {
      const Marquee = await this.prisma.marquee.findUnique({
        where: { id },
      });

      if (!Marquee) {
        throw new NotFoundException(`Marquee with ID ${id} not found`);
      }

      return Marquee;
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new BadRequestException('Error retrieving Marquee');
    }
  }

  async update(id: number, updateMarqueeDto: UpdateMarqueeDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.marquee.update({
        where: { id },
        data: {
          ...updateMarqueeDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error updating Marquee');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.marquee.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Error deleting Marquee');
    }
  }
}
