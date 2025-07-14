import { IsNotEmpty, IsString, IsArray, IsBoolean, IsOptional, IsNumber, IsUrl, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateProjectDto {
  @ApiProperty({ description: 'Titre du projet', example: 'Site vitrine' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ description: 'Description du projet', example: 'Développement d\'un site vitrine pour un client.' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiPropertyOptional({ description: 'Image du projet', example: 'project-image.png' })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiProperty({ description: 'Technologies utilisées (chaîne JSON)', example: '["NestJS", "React", "MySQL"]' })
  @IsNotEmpty()
  @IsString()
  technologies?: string;

  @ApiProperty({ description: 'Technologies utilisées (chaîne JSON)', example: '["NestJS", "React", "MySQL"]' })
  @IsNotEmpty()
  @IsString()
  tags?: string;

  @ApiPropertyOptional({ description: 'Projet actif ?', example: true })
  @IsOptional()
  @Type(() => Boolean)
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Ordre d\'affichage', example: 1 })
  @IsOptional()
  @Type(() => Number)
  order?: number;

  @ApiPropertyOptional({ description: 'Nom du client', example: 'Entreprise X' })
  @IsOptional()
  @IsString()
  clientName?: string;

  @ApiPropertyOptional({ description: 'URL du projet', example: 'https://exemple.com' })
  @IsOptional()
  @IsUrl()
  projectUrl?: string;

  @ApiPropertyOptional({ description: 'ID du service associé', example: 2 })
  @IsOptional()
  @Type(() => Number)
  serviceId?: number;

  @ApiPropertyOptional({ description: 'Nouveau projet ?', example: false })
  @IsOptional()
  @Type(() => Boolean)
  isNew?: boolean;

  @ApiPropertyOptional({ description: 'Projet en vedette ?', example: false })
  @IsOptional()
  @Type(() => Boolean)
  isFeatured?: boolean;

  @ApiPropertyOptional({ description: 'Slug SEO-friendly', example: 'site-vitrine' })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiPropertyOptional({ description: 'Catégorie du projet', example: 'Web' })
  @IsOptional()
  @IsString()
  category?: string;

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

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
