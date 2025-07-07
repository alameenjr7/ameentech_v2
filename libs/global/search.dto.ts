import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsIn, IsInt } from 'class-validator';

export class SearchDto {
  @ApiPropertyOptional({ description: 'Search by name' })
  @IsOptional()
  @IsString()
  q?: string;

  @ApiPropertyOptional({
    enum: ['name', 'created_at'],
    description: 'Sort by name or creation date',
  })
  @IsOptional()
  @IsIn(['name', 'created_at'])
  order_by?: string = 'created_at';

  @ApiPropertyOptional({
    enum: ['asc', 'desc'],
    description: 'Sort direction',
  })
  @IsOptional()
  @IsIn(['asc', 'desc'])
  order_dir?: 'asc' | 'desc' = 'desc';

  @ApiPropertyOptional({ description: 'Limit number of results' })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit?: number;

  @ApiPropertyOptional({ description: 'Offset for pagination' })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  offset?: number;
}
