import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateEducationDto,
  UpdateEducationDto,
} from '../../libs/dto/education.dto';
import { SearchDto } from '../../libs/global/search.dto';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService) {}

  async create(createEducationDto: CreateEducationDto) {
    try {
      return await this.prisma.education.create({
        data: {
          ...createEducationDto,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error creating education entry');
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
        { institution: { contains: q } },
        { degree: { contains: q } },
        { period: { contains: q } },
      ];
    }

    const orderBy: any = {};
    if (order_by === 'institution') {
      orderBy.institution = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.education.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Error retrieving education entries');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    try {
      const education = await this.prisma.education.findUnique({
        where: { id },
      });

      if (!education) {
        throw new NotFoundException(`Education entry with ID ${id} not found`);
      }

      return education;
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new BadRequestException('Error retrieving education entry');
    }
  }

  async update(id: number, updateEducationDto: UpdateEducationDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.education.update({
        where: { id },
        data: {
          ...updateEducationDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error updating education entry');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.education.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Error deleting education entry');
    }
  }
}
