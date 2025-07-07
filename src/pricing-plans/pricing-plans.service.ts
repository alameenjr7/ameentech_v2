import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePricingPlanDto, UpdatePricingPlanDto } from '../../libs/dto/pricing-plan.dto';
import { SearchDto } from '../../libs/global/search.dto';

@Injectable()
export class PricingPlansService {
  constructor(private prisma: PrismaService) {}

  async create(createPricingPlanDto: CreatePricingPlanDto) {
    try {
      return await this.prisma.pricingPlans.create({
        data: {
          ...createPricingPlanDto,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error creating pricing plan');
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
      ];
    }

    const orderBy: any = {};
    if (order_by === 'name') {
      orderBy.name = order_dir;
    } else {
      orderBy.createdAt = order_dir;
    }

    try {
      return await this.prisma.pricingPlans.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      });
    } catch (error) {
      throw new BadRequestException('Error retrieving pricing plans');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    try {
      const pricingPlan = await this.prisma.pricingPlans.findUnique({
        where: { id },
      });

      if (!pricingPlan) {
        throw new NotFoundException(`Pricing plan with ID ${id} not found`);
      }

      return pricingPlan;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Error retrieving pricing plan');
    }
  }

  async update(id: number, updatePricingPlanDto: UpdatePricingPlanDto) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.pricingPlans.update({
        where: { id },
        data: {
          ...updatePricingPlanDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw new BadRequestException('Error updating pricing plan');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid ID');
    }

    await this.findOne(id);

    try {
      return await this.prisma.pricingPlans.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Error deleting pricing plan');
    }
  }
}
