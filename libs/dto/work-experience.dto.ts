import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateWorkExperienceDto {
  @ApiProperty({ description: 'The period of work experience', example: '2022-Present' })
  @IsNotEmpty()
  @IsString()
  period: string;

  @ApiProperty({ description: 'The company of work experience', example: 'Example Inc.' })
  @IsNotEmpty()
  @IsString()
  company: string;

  @ApiProperty({ description: 'The role held', example: 'Software Engineer' })
  @IsNotEmpty()
  @IsString()
  role: string;

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

export class UpdateWorkExperienceDto extends PartialType(CreateWorkExperienceDto) {}
