import { Module } from '@nestjs/common';
import { WorkExperiencesController } from './work-experiences.controller';
import { WorkExperiencesService } from './work-experiences.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WorkExperiencesController],
  providers: [WorkExperiencesService],
})
export class WorkExperiencesModule {}
