import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFaqDto, UpdateFaqDto } from '../../libs/dto/faq.dto';
import { SearchDto } from '../../libs/global/search.dto';

@Injectable()
export class FaqsService {
  constructor(private prisma: PrismaService) {}

  async create(createFaqDto: CreateFaqDto) {
    try {
      return await this.prisma.faqs.create({
        data: {
          ...createFaqDto,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error creating FAQ');
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
        { question: { contains: q } },
        { answer: { contains: q } },
      ];
    }

    const orderBy: any = {};
    if (order_by === 'question') {
      orderBy.question = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.faqs.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Error retrieving FAQs');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    try {
      const faq = await this.prisma.faqs.findUnique({
        where: { id },
      });

      if (!faq) {
        throw new NotFoundException(`FAQ with ID ${id} not found`);
      }

      return faq;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Error retrieving FAQ');
    }
  }

  async update(id: number, updateFaqDto: UpdateFaqDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.faqs.update({
        where: { id },
        data: {
          ...updateFaqDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error updating FAQ');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.faqs.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Error deleting FAQ');
    }
  }
}
