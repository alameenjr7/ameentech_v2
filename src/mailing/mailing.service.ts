import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMailingDto, UpdateMailingDto } from 'libs/dto/mailing.dto';
import { SearchDto } from 'libs/global/search.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MailingService {
  constructor(private prisma: PrismaService) {}

  async create(createMailingDto: CreateMailingDto) {
    try {
      return await this.prisma.mailing.create({
        data: {
          ...createMailingDto,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error creating Mailing');
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
      where.OR = [{ email: { contains: q } }];
    }

    const orderBy: any = {};
    if (order_by === 'email') {
      orderBy.email = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.mailing.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Error retrieving Mailings');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    try {
      const mailing = await this.prisma.mailing.findUnique({
        where: { id },
      });

      if (!mailing) {
        throw new NotFoundException(`Mailing with ID ${id} not found`);
      }

      return mailing;
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new BadRequestException('Error retrieving Mailing');
    }
  }

  async update(id: number, updateMailingDto: UpdateMailingDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.mailing.update({
        where: { id },
        data: {
          ...updateMailingDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error updating Mailing');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.mailing.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Error deleting Mailing');
    }
  }
}
