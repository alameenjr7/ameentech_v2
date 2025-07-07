import { IsNotEmpty, IsString, IsOptional, IsDate, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateTestimonialDto {
  @ApiProperty({ description: 'Name of the person giving the testimonial', example: 'Jane Doe' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Role of the person', example: 'CEO of Example Inc.' })
  @IsNotEmpty()
  @IsString()
  role: string;

  @ApiProperty({ description: 'Rating given', example: 5 })
  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @ApiProperty({ description: 'The testimonial text', example: 'This is a great service!' })
  @IsNotEmpty()
  @IsString()
  text: string;

  @ApiProperty({ description: 'Avatar of the person', example: 'avatar.png' })
  @IsNotEmpty()
  @IsString()
  avatar: string;

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

export class UpdateTestimonialDto extends PartialType(CreateTestimonialDto) {}
