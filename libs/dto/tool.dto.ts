import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsDate,
  IsNumber,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateToolDto {
  @ApiProperty({ description: 'Name of the tool', example: 'NestJS' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Percentage of proficiency', example: 90 })
  @IsNotEmpty()
  @IsNumber()
  percent: number;

  @ApiProperty({ description: 'Icon for the tool', example: 'nestjs.png' })
  @IsNotEmpty()
  @IsString()
  icon: string;

  @ApiPropertyOptional({
    description: 'Creation date',
    example: '2024-05-01T12:00:00Z',
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date;

  @ApiPropertyOptional({
    description: 'Update date',
    example: '2024-05-02T12:00:00Z',
  })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updatedAt?: Date;
}

export class UpdateToolDto extends PartialType(CreateToolDto) {}
