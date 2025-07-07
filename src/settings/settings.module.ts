import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { PrismaModule } from '../prisma/prisma.module';
import { SettingsController } from './settings.controller';

@Module({
  imports: [PrismaModule],
  providers: [SettingsService],
  exports: [SettingsService],
  controllers: [SettingsController],
})
export class SettingsModule {} 