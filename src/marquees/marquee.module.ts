import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { MarqueesService } from './marquee.service';
import { MarqueesController } from './marquee.controller';

@Module({
  imports: [PrismaModule],
  controllers: [MarqueesController],
  providers: [MarqueesService],
})
export class MarqueesModule {}
