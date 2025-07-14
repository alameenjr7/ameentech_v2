import { IsNotEmpty, IsString, IsOptional, IsDate, IsEmail } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateMailingDto {
  @ApiProperty({ description: 'The mail for New Info', example: 'example@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

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

export class UpdateMailingDto extends PartialType(CreateMailingDto) {}
