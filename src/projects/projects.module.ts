import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { SharpModule } from '../../libs/sharp/sharp.module';

@Module({
  imports: [PrismaModule, SharpModule],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
