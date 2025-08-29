import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateToolDto, UpdateToolDto } from '../../libs/dto/tool.dto';
import { SearchDto } from '../../libs/global/search.dto';

@Injectable()
export class ToolsService {
  constructor(private prisma: PrismaService) {}

  async create(createToolDto: CreateToolDto) {
    try {
      return await this.prisma.tools.create({
        data: {
          ...createToolDto,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error creating tool');
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
      where.OR = [{ name: { contains: q } }];
    }

    const orderBy: any = {};
    if (order_by === 'name') {
      orderBy.name = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.tools.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Error retrieving tools');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    try {
      const tool = await this.prisma.tools.findUnique({
        where: { id },
      });

      if (!tool) {
        throw new NotFoundException(`Tool with ID ${id} not found`);
      }

      return tool;
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new BadRequestException('Error retrieving tool');
    }
  }

  async update(id: number, updateToolDto: UpdateToolDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.tools.update({
        where: { id },
        data: {
          ...updateToolDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error updating tool');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.tools.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Error deleting tool');
    }
  }
}
