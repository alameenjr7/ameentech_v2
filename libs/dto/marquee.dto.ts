import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateMarqueeDto {
  @ApiProperty({ description: 'Items for the marquee (JSON string)', example: '["Item 1", "Item 2"]' })
  @IsNotEmpty()
  @IsString()
  items: string;

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

export class UpdateMarqueeDto extends PartialType(CreateMarqueeDto) {}
