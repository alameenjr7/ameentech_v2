import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto, UpdateSettingDto } from '../../libs/dto/setting.dto';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { SearchDto } from '../../libs/global/search.dto';
import { ErrorResponse } from '../../libs/errors/error.response';

@ApiTags('settings')
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new setting' })
  @ApiResponse({ status: 201, description: 'Setting created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  create(@Body() createSettingDto: CreateSettingDto) {
    return this.settingsService.create(createSettingDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all settings' })
  @ApiResponse({ status: 200, description: 'Settings retrieved successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findAll(@Query() searchDto: SearchDto) {
    return this.settingsService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a setting by ID' })
  @ApiResponse({ status: 200, description: 'Setting retrieved successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({ status: 404, description: 'Setting not found', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.settingsService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a setting' })
  @ApiResponse({ status: 200, description: 'Setting updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({ status: 404, description: 'Setting not found', type: ErrorResponse })
  update(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
    return this.settingsService.update(Number(id), updateSettingDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a setting' })
  @ApiResponse({ status: 200, description: 'Setting deleted successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({ status: 404, description: 'Setting not found', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.settingsService.remove(Number(id));
  }
}
