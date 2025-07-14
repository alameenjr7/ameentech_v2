import { IsNotEmpty, IsOptional, IsString, IsBoolean, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateSettingDto {
  @ApiProperty({
    description: 'The title of the setting',
    example: 'AmeenTECH'
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The phone number of the setting',
    example: '+221772050626'
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'The email of the setting',
    example: 'info@ameenaltech.com'
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'The address of the setting',
    example: 'Dakar, Sénégal'
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiPropertyOptional({
    description: 'The meta description of the setting',
    example: 'AmeenTECH is a technology company that provides services to businesses.'
  })
  @IsOptional()
  @IsString()
  meta_description?: string;

  @ApiPropertyOptional({
    description: 'The meta keywords of the setting',
    example: 'AmeenTECH, technology, services'
  })
  @IsOptional()
  @IsString()
  meta_keywords?: string;

  @ApiPropertyOptional({
    description: 'The slogan of the setting',
    example: 'AmeenTECH is a technology company that provides services to businesses.'
  })
  @IsOptional()
  @IsString()
  slogan?: string;

  @ApiPropertyOptional({
    description: 'Primary color of the setting',
    example: '#000000'
  })
  @IsOptional()
  @IsString()
  color?: string;

  @ApiPropertyOptional({
    description: 'Secondary color of the setting',
    example: '#000000'
  })
  @IsOptional()
  @IsString()
  color_2?: string;

  @ApiPropertyOptional({
    description: 'Tertiary color of the setting',
    example: '#000000'
  })
  @IsOptional()
  @IsString()
  color_3?: string;

  @ApiPropertyOptional({
    description: 'Facebook URL of the setting',
    example: 'https://www.facebook.com/ameentechnology'
  })
  @IsOptional()
  @IsString()
  facebook?: string;

  @ApiPropertyOptional({
    description: 'Instagram URL of the setting',
    example: 'https://www.instagram.com/ameentechnology'
  })
  @IsOptional()
  @IsString()
  instagram?: string;

  @ApiPropertyOptional({
    description: 'Twitter URL of the setting',
    example: 'https://www.twitter.com/ameentechnology'
  })
  @IsOptional()
  @IsString()
  twitter?: string;

  @ApiPropertyOptional({
    description: 'LinkedIn URL of the setting',
    example: 'https://www.linkedin.com/ameentechnology'
  })
  @IsOptional()
  @IsString()
  linkedin?: string;

  @ApiPropertyOptional({
    description: 'WhatsApp URL of the setting',
    example: 'https://www.whatsapp.com/ameentechnology'
  })
  @IsOptional()
  @IsString()
  whatsapp?: string;

  @ApiPropertyOptional({
    description: 'Telegram URL of the setting',
    example: 'https://www.telegram.org/ameentechnology'
  })
  @IsOptional()
  @IsString()
  telegram?: string;

  @ApiPropertyOptional({
    description: 'YouTube URL of the setting',
    example: 'https://www.youtube.com/ameentechnology'
  })
  @IsOptional()
  @IsString()
  youtube?: string;

  @ApiPropertyOptional({
    description: 'TikTok URL of the setting',
    example: 'https://www.tiktok.com/ameentechnology'
  })
  @IsOptional()
  @IsString()
  tiktok?: string;

  @ApiPropertyOptional({
    description: 'Domain URL of the setting',
    example: 'https://www.ameenaltech.com/'
  })
  @IsOptional()
  @IsString()
  domain?: string;

  @ApiPropertyOptional({ description: 'Date de création', example: '2024-05-01T12:00:00Z' })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date;

  @ApiPropertyOptional({ description: 'Date de mise à jour', example: '2024-05-02T12:00:00Z' })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updatedAt?: Date;

  @ApiPropertyOptional({
    description: 'The timezone of the setting',
    example: 'UTC'
  })
  @IsOptional()
  @IsString()
  timezone?: string;

  @ApiPropertyOptional({
    description: 'Whether the setting is active',
    example: true
  })
  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isActive?: boolean;
}

export class UpdateSettingDto extends PartialType(CreateSettingDto) {}
