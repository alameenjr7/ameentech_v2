import { IsEmail, IsNotEmpty, IsOptional, IsString, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateContactDto {
  @ApiProperty({
    description: 'The name of the contact',
    example: 'John Doe'
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The email address of the contact',
    example: 'john.doe@example.com'
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiPropertyOptional({
    description: 'The phone number of the contact',
    example: '+1234567890'
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({
    description: 'The interest of the contact',
    example: 'Web Development'
  })
  @IsOptional()
  @IsString()
  interest?: string;

  @ApiPropertyOptional({
    description: 'The budget of the contact',
    example: '1000-2000$'
  })
  @IsOptional()
  @IsString()
  budget?: string;

  @ApiPropertyOptional({
    description: 'The country of the contact',
    example: 'USA'
  })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiProperty({
    description: 'The message from the contact',
    example: 'I would like to discuss a project.'
  })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiPropertyOptional({
    description: 'The status of the contact',
    example: 'new'
  })
  @IsOptional()
  @IsString()
  status?: string;

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

export class UpdateContactDto extends PartialType(CreateContactDto) {}
