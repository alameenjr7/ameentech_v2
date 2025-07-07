import { Module } from '@nestjs/common';
import { PricingPlansController } from './pricing-plans.controller';
import { PricingPlansService } from './pricing-plans.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PricingPlansController],
  providers: [PricingPlansService],
})
export class PricingPlansModule {}
