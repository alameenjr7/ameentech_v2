import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto, UpdateSettingDto } from '../../libs/dto/setting.dto';
import {
  ApiOperation,
  ApiTags,
  ApiResponse,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { SearchDto } from '../../libs/global/search.dto';
import { ErrorResponse } from '../../libs/errors/error.response';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

interface SettingFiles {
  logo?: Express.Multer.File[];
  logo_2?: Express.Multer.File[];
  favicon?: Express.Multer.File[];
  meta_image?: Express.Multer.File[];
}

@ApiTags('settings')
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new setting' })
  @ApiResponse({ status: 201, description: 'Setting created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Data to create settings, including optional images.',
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'AmeenTECH' },
        phone: { type: 'string', example: '+221772050626' },
        email: { type: 'string', example: 'info@ameenaltech.com' },
        address: { type: 'string', example: 'Dakar, Sénégal' },
        meta_description: {
          type: 'string',
          example:
            'AmeenTECH is a technology company that provides services to businesses.',
        },
        meta_keywords: {
          type: 'string',
          example: 'AmeenTECH, technology, services',
        },
        slogan: {
          type: 'string',
          example:
            'AmeenTECH is a technology company that provides services to businesses.',
        },
        isActive: { type: 'boolean', example: true },
        color: { type: 'string', example: '#000000' },
        color_2: { type: 'string', example: '#000000' },
        color_3: { type: 'string', example: '#000000' },
        facebook: {
          type: 'string',
          example: 'https://www.facebook.com/ameentechnology',
        },
        instagram: {
          type: 'string',
          example: 'https://www.instagram.com/ameentechnology',
        },
        twitter: {
          type: 'string',
          example: 'https://www.twitter.com/ameentechnology',
        },
        linkedin: {
          type: 'string',
          example: 'https://www.linkedin.com/ameentechnology',
        },
        whatsapp: {
          type: 'string',
          example: 'https://www.whatsapp.com/ameentechnology',
        },
        telegram: {
          type: 'string',
          example: 'https://www.telegram.org/ameentechnology',
        },
        youtube: {
          type: 'string',
          example: 'https://www.youtube.com/ameentechnology',
        },
        tiktok: {
          type: 'string',
          example: 'https://www.tiktok.com/ameentechnology',
        },
        domain: { type: 'string', example: 'https://www.ameenaltech.com/' },
        timezone: { type: 'string', example: 'UTC' },
        logo: { type: 'string', format: 'binary', description: 'Logo file' },
        logo_2: {
          type: 'string',
          format: 'binary',
          description: 'Secondary logo file',
        },
        favicon: {
          type: 'string',
          format: 'binary',
          description: 'Favicon file',
        },
        meta_image: {
          type: 'string',
          format: 'binary',
          description: 'Meta image file',
        },
      },
    },
  })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'logo', maxCount: 1 },
      { name: 'logo_2', maxCount: 1 },
      { name: 'favicon', maxCount: 1 },
      { name: 'meta_image', maxCount: 1 },
    ]),
  )
  create(
    @Body() createSettingDto: CreateSettingDto,
    @UploadedFiles() files: SettingFiles,
  ) {
    return this.settingsService.create(createSettingDto, files);
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
  @ApiResponse({
    status: 404,
    description: 'Setting not found',
    type: ErrorResponse,
  })
  findOne(@Param('id') id: string) {
    return this.settingsService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a setting' })
  @ApiResponse({ status: 200, description: 'Setting updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({
    status: 404,
    description: 'Setting not found',
    type: ErrorResponse,
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Data to update settings. All fields are optional.',
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        phone: { type: 'string' },
        email: { type: 'string' },
        address: { type: 'string' },
        meta_description: { type: 'string' },
        meta_keywords: { type: 'string' },
        slogan: { type: 'string' },
        isActive: { type: 'boolean' },
        color: { type: 'string' },
        color_2: { type: 'string' },
        color_3: { type: 'string' },
        facebook: { type: 'string' },
        instagram: { type: 'string' },
        twitter: { type: 'string' },
        linkedin: { type: 'string' },
        whatsapp: { type: 'string' },
        telegram: { type: 'string' },
        youtube: { type: 'string' },
        tiktok: { type: 'string' },
        domain: { type: 'string' },
        timezone: { type: 'string' },
        logo: { type: 'string', format: 'binary' },
        logo_2: { type: 'string', format: 'binary' },
        favicon: { type: 'string', format: 'binary' },
        meta_image: { type: 'string', format: 'binary' },
      },
    },
  })
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'logo', maxCount: 1 },
      { name: 'logo_2', maxCount: 1 },
      { name: 'favicon', maxCount: 1 },
      { name: 'meta_image', maxCount: 1 },
    ]),
  )
  update(
    @Param('id') id: string,
    @Body() updateSettingDto: UpdateSettingDto,
    @UploadedFiles() files: SettingFiles,
  ) {
    return this.settingsService.update(Number(id), updateSettingDto, files);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a setting' })
  @ApiResponse({ status: 200, description: 'Setting deleted successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({
    status: 404,
    description: 'Setting not found',
    type: ErrorResponse,
  })
  remove(@Param('id') id: string) {
    return this.settingsService.remove(Number(id));
  }
}
