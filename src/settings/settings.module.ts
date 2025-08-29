import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { SharpModule } from '../../libs/sharp/sharp.module';

@Module({
  imports: [PrismaModule, SharpModule],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule {}
