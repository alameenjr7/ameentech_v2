import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonialDto, UpdateTestimonialDto } from '../../libs/dto/testimonial.dto';
import { SearchDto } from '../../libs/global/search.dto';
import { SharpService } from '../../libs/sharp/sharp.service';
import { promises as fs } from 'fs';
import { sharpConfig } from '../../libs/sharp/sharp.config';

@Injectable()
export class TestimonialsService {
  constructor(
    private prisma: PrismaService,
    private sharpService: SharpService,
  ) {}

  async create(createTestimonialDto: CreateTestimonialDto, file?: Express.Multer.File) {
    try {
      const dataToCreate: any = {
        ...createTestimonialDto,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      if (file && file.buffer) {
        dataToCreate.avatar = await this.sharpService.resizeImage(file.buffer, file.originalname);
      }

      return await this.prisma.testimonials.create({ data: dataToCreate });
    } catch (error) {
      throw new BadRequestException('Error creating testimonial');
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
        { name: { contains: q } },
        { role: { contains: q } },
        { text: { contains: q } },
      ];
    }

    const orderBy: any = {};
    if (order_by === 'name') {
      orderBy.name = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.testimonials.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Error retrieving testimonials');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    try {
      const testimonial = await this.prisma.testimonials.findUnique({
        where: { id },
      });

      if (!testimonial) {
        throw new NotFoundException(`Testimonial with ID ${id} not found`);
      }

      return testimonial;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Error retrieving testimonial');
    }
  }

  async update(id: number, updateTestimonialDto: UpdateTestimonialDto, file?: Express.Multer.File) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    const testimonial = await this.findOne(id);

    try {
      const dataToUpdate: any = {
        ...updateTestimonialDto,
        updatedAt: new Date(),
      };

      if (file && file.buffer) {
        dataToUpdate.avatar = await this.sharpService.resizeImage(file.buffer, file.originalname);
        if (testimonial.avatar) {
          try {
            const oldImagePath = sharpConfig.getOutputPath(testimonial.avatar);
            await fs.unlink(oldImagePath);
          } catch(e) {
            console.error(`Impossible de supprimer l'ancien avatar: ${testimonial.avatar}`, e);
          }
        }
      }

      return await this.prisma.testimonials.update({
        where: { id },
        data: dataToUpdate,
      });
    } catch (error) {
      throw new BadRequestException('Error updating testimonial');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.testimonials.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Error deleting testimonial');
    }
  }
}
