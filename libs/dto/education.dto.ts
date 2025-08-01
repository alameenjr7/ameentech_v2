import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateEducationDto {
  @ApiProperty({ description: 'The period of education', example: '2018-2022' })
  @IsNotEmpty()
  @IsString()
  period: string;

  @ApiProperty({ description: 'The institution of education', example: 'University of Example' })
  @IsNotEmpty()
  @IsString()
  institution: string;

  @ApiProperty({ description: 'The degree obtained', example: 'Bachelor of Science in Computer Science' })
  @IsNotEmpty()
  @IsString()
  degree: string;

  @ApiPropertyOptional({ description: 'Creation date', example: '2024-05-01T12:00:00Z' })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date;

  @ApiPropertyOptional({ description: 'Update date', example: '2024-05-02T12:00:00Z' })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updatedAt?: Date;
}

export class UpdateEducationDto extends PartialType(CreateEducationDto) {}
