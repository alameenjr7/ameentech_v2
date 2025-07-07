import { IsNotEmpty, IsString, IsBoolean, IsOptional, IsNumber, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateServiceDto {
  @ApiProperty({ description: 'Titre du service', example: 'Développement Web' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Description du service', example: 'Création de sites web modernes.' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiPropertyOptional({ description: 'Icône du service', example: 'web-icon.png' })
  @IsOptional()
  @IsString()
  icon?: string;

  @ApiPropertyOptional({ description: 'Service actif ?', example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Ordre d\'affichage', example: 1 })
  @IsOptional()
  @IsNumber()
  order?: number;

  @ApiPropertyOptional({ description: 'Nouveau service ?', example: false })
  @IsOptional()
  @IsBoolean()
  isNew?: boolean;

  @ApiPropertyOptional({ description: 'Service en vedette ?', example: false })
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @ApiPropertyOptional({ description: 'Slug SEO-friendly', example: 'developpement-web' })
  @IsOptional()
  @IsString()
  slug?: string;

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
}

export class UpdateServiceDto extends PartialType(CreateServiceDto) {}
