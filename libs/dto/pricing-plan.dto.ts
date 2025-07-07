import { IsNotEmpty, IsString, IsOptional, IsDate, IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePricingPlanDto {
  @ApiProperty({ description: 'Name of the pricing plan', example: 'Basic' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Price of the plan', example: 10.00 })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'Features of the plan (JSON string)', example: '["Feature 1", "Feature 2"]' })
  @IsNotEmpty()
  @IsString()
  features: string;

  @ApiProperty({ description: 'Icon for the plan', example: 'icon.png' })
  @IsNotEmpty()
  @IsString()
  icon: string;

  @ApiPropertyOptional({ description: 'Is the plan popular?', example: false })
  @IsOptional()
  @IsBoolean()
  popular?: boolean;

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

export class UpdatePricingPlanDto extends PartialType(CreatePricingPlanDto) {}
