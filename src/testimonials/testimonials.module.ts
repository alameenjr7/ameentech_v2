import { Module } from '@nestjs/common';
import { TestimonialsController } from './testimonials.controller';
import { TestimonialsService } from './testimonials.service';
import { PrismaModule } from '../prisma/prisma.module';
import { SharpModule } from '../../libs/sharp/sharp.module';

@Module({
  imports: [PrismaModule, SharpModule],
  controllers: [TestimonialsController],
  providers: [TestimonialsService],
})
export class TestimonialsModule {}
