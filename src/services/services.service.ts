import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto, UpdateServiceDto } from '../../libs/dto/service.dto';
import { SearchDto } from 'libs/global/search.dto';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    try {
      return await this.prisma.service.create({
        data: {
          ...createServiceDto,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la création du service');
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
      return await this.prisma.service.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la récupération des services');
    }
  }

  async findActive() {
    try {
      return await this.prisma.service.findMany({
        where: { isActive: true },
        orderBy: [
          { order: 'asc' },
          { createdAt: 'desc' },
        ],
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la récupération des services actifs');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      const service = await this.prisma.service.findUnique({
        where: { id },
      });

      if (!service) {
        throw new NotFoundException(`Service avec l'ID ${id} non trouvé`);
      }

      return service;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Erreur lors de la récupération du service');
    }
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      return await this.prisma.service.update({
        where: { id },
        data: {
          ...updateServiceDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la mise à jour du service');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      return await this.prisma.service.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la suppression du service');
    }
  }

  async toggleActive(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      const service = await this.prisma.service.findUnique({
        where: { id },
      });

      if (!service) {
        throw new NotFoundException(`Service avec l'ID ${id} non trouvé`);
      }

      const updatedService = await this.prisma.service.update({
        where: { id },
        data: { isActive: !service.isActive },
      });

      return updatedService;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Erreur lors de la mise à jour du statut actif du service');
    }
  }
}
