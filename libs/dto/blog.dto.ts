import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateBlogDto {
  @ApiProperty({
    description: 'Category of the blog post',
    example: 'Technology',
  })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({ description: 'Date of the blog post', example: '2024-07-26' })
  @IsNotEmpty()
  @IsString()
  date: string;

  @ApiProperty({
    description: 'Title of the blog post',
    example: 'The Future of AI',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Excerpt of the blog post',
    example: 'A brief overview of the future of artificial intelligence.',
  })
  @IsNotEmpty()
  @IsString()
  excerpt: string;

  @ApiProperty({
    description: 'Link to the full blog post',
    example: 'https://example.com/blog/the-future-of-ai',
  })
  @IsNotEmpty()
  @IsString()
  link: string;

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

export class UpdateBlogDto extends PartialType(CreateBlogDto) {}
