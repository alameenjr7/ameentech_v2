import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSettingDto, UpdateSettingDto } from '../../libs/dto/setting.dto';
import { SearchDto } from '../../libs/global/search.dto';

@Injectable()
export class SettingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateSettingDto) {
    try {
      return await this.prisma.setting.create({
        data: {
          ...data,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la création du paramètre');
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
        { description: { contains: q } },
      ];
    }

    const orderBy: any = {};
    if (order_by === 'title') {
      orderBy.title = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.setting.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la récupération des paramètres');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      const setting = await this.prisma.setting.findUnique({ where: { id } });
      if (!setting) throw new NotFoundException('Paramètre non trouvé');
      return setting;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Erreur lors de la récupération du paramètre');
    }
  }

  async update(id: number, data: UpdateSettingDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      return await this.prisma.setting.update({
        where: { id },
        data: {
          ...data,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la mise à jour du paramètre');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      return await this.prisma.setting.delete({ where: { id } });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la suppression du paramètre');
    }
  }
}
