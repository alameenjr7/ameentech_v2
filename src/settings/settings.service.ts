import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSettingDto, UpdateSettingDto } from '../../libs/dto/setting.dto';
import { SearchDto } from '../../libs/global/search.dto';
import { SharpService } from '../../libs/sharp/sharp.service';
import { promises as fs } from 'fs';
import { sharpConfig } from '../../libs/sharp/sharp.config';

interface SettingFiles {
  logo?: Express.Multer.File[];
  logo_2?: Express.Multer.File[];
  favicon?: Express.Multer.File[];
  meta_image?: Express.Multer.File[];
}

type SettingFileField = keyof SettingFiles;

@Injectable()
export class SettingsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly sharpService: SharpService,
  ) {}

  async create(data: CreateSettingDto, files: SettingFiles = {}) {
    try {
      const dataToCreate: any = {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const fileFields: SettingFileField[] = [
        'logo',
        'logo_2',
        'favicon',
        'meta_image',
      ];
      for (const field of fileFields) {
        const file = files[field]?.[0];
        if (file) {
          dataToCreate[field] = await this.sharpService.resizeImage(
            file.buffer,
            file.originalname,
          );
        }
      }

      return await this.prisma.setting.create({ data: dataToCreate });
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
      where.OR = [{ title: { contains: q } }, { description: { contains: q } }];
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
      throw new BadRequestException(
        'Erreur lors de la récupération des paramètres',
      );
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
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new BadRequestException(
        'Erreur lors de la récupération du paramètre',
      );
    }
  }

  async update(id: number, data: UpdateSettingDto, files: SettingFiles = {}) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }
    const setting = await this.findOne(id);

    try {
      const dataToUpdate: any = { ...data, updatedAt: new Date() };

      const fileFields: SettingFileField[] = [
        'logo',
        'logo_2',
        'favicon',
        'meta_image',
      ];
      for (const field of fileFields) {
        const file = files[field]?.[0];
        if (file) {
          dataToUpdate[field] = await this.sharpService.resizeImage(
            file.buffer,
            file.originalname,
          );
          const oldImage = setting[field];
          if (oldImage) {
            try {
              await fs.unlink(sharpConfig.getOutputPath(oldImage));
            } catch (e) {
              console.error(
                `Impossible de supprimer l'ancienne image: ${oldImage}`,
                e,
              );
            }
          }
        }
      }

      return await this.prisma.setting.update({
        where: { id },
        data: dataToUpdate,
      });
    } catch (error) {
      throw new BadRequestException(
        'Erreur lors de la mise à jour du paramètre',
      );
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      return await this.prisma.setting.delete({ where: { id } });
    } catch (error) {
      throw new BadRequestException(
        'Erreur lors de la suppression du paramètre',
      );
    }
  }
}
