import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsBoolean,
  IsDate,
} from 'class-validator';
import { PartialType, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class AboutDto {
  @ApiProperty({
    description: 'Titre de la section à propos',
    example: 'À propos de nous',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Description principale',
    example: 'Nous sommes une équipe passionnée...',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiPropertyOptional({ description: "URL de l'image", example: 'about.jpg' })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({
    description: 'Paragraphes (chaîne JSON)',
    example: '["Paragraphe 1", "Paragraphe 2"]',
  })
  @IsNotEmpty()
  @IsString()
  paragraphs: string;

  @ApiProperty({
    description: 'Statistiques (chaîne JSON)',
    example: '[{"number":"60+","label":"Projets réalisés"}]',
  })
  @IsNotEmpty()
  @IsString()
  stats: string;

  @ApiPropertyOptional({
    description: "Années d'expérience",
    example: '[{"number":"10+","label":"Années d\'expérience"}]',
  })
  @IsOptional()
  @IsString()
  yearExperience?: string;

  @ApiPropertyOptional({
    description: 'Clients (chaîne JSON)',
    example: '[{"number":"100+","label":"Clients"}]',
  })
  @IsOptional()
  @IsString()
  clients?: string;

  @ApiPropertyOptional({ description: 'Signature', example: 'Baaba NGOM' })
  @IsOptional()
  @IsString()
  signature?: string;

  @ApiPropertyOptional({ description: 'Section active ?', example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiPropertyOptional({ description: 'Version du contenu', example: 1 })
  @IsOptional()
  @IsNumber()
  version?: number;

  @ApiPropertyOptional({
    description: 'Date de création',
    example: '2024-05-01T12:00:00Z',
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date;

  @ApiPropertyOptional({
    description: 'Date de mise à jour',
    example: '2024-05-02T12:00:00Z',
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updatedAt?: Date;
}

export class UpdateAboutDto extends PartialType(AboutDto) {}
