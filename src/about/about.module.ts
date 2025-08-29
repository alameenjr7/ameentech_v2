import { Module } from '@nestjs/common';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { PrismaModule } from '../prisma/prisma.module';
import { SharpModule } from '../../libs/sharp/sharp.module';

@Module({
  imports: [PrismaModule, SharpModule],
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule {}
