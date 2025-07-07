import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkExperienceDto, UpdateWorkExperienceDto } from '../../libs/dto/work-experience.dto';
import { SearchDto } from '../../libs/global/search.dto';

@Injectable()
export class WorkExperiencesService {
  constructor(private prisma: PrismaService) {}

  async create(createWorkExperienceDto: CreateWorkExperienceDto) {
    try {
      return await this.prisma.workExperience.create({
        data: {
          ...createWorkExperienceDto,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error creating work experience');
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
        { company: { contains: q } },
        { role: { contains: q } },
        { period: { contains: q } },
      ];
    }

    const orderBy: any = {};
    if (order_by === 'company') {
      orderBy.company = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.workExperience.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Error retrieving work experiences');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    try {
      const workExperience = await this.prisma.workExperience.findUnique({
        where: { id },
      });

      if (!workExperience) {
        throw new NotFoundException(`Work experience with ID ${id} not found`);
      }

      return workExperience;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Error retrieving work experience');
    }
  }

  async update(id: number, updateWorkExperienceDto: UpdateWorkExperienceDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.workExperience.update({
        where: { id },
        data: {
          ...updateWorkExperienceDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error updating work experience');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.workExperience.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Error deleting work experience');
    }
  }
}
