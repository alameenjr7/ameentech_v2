import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { PrismaModule } from '../prisma/prisma.module';
import { SharpModule } from '../../libs/sharp/sharp.module';

@Module({
  imports: [PrismaModule, SharpModule],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
