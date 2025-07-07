import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateFaqDto {
  @ApiProperty({ description: 'The question for the FAQ', example: 'What is your return policy?' })
  @IsNotEmpty()
  @IsString()
  question: string;

  @ApiPropertyOptional({ description: 'The answer to the question', example: 'Our return policy is...' })
  @IsOptional()
  @IsString()
  answer?: string;

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

export class UpdateFaqDto extends PartialType(CreateFaqDto) {}
