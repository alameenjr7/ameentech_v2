import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ErrorResponse } from '../../libs/errors/error.response';
import { SearchDto } from '../../libs/global/search.dto';
import { MarqueesService } from './marquee.service';
import { CreateMarqueeDto, UpdateMarqueeDto } from 'libs/dto/marquee.dto';

@ApiTags('marquees')
@Controller('marquees')
export class MarqueesController {
  constructor(private readonly marqueesService: MarqueesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new FAQ' })
  @ApiResponse({ status: 201, description: 'FAQ created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  create(@Body() createMarqueeDto: CreateMarqueeDto) {
    return this.marqueesService.create(createMarqueeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all FAQs' })
  @ApiQuery({ name: 'q', required: false, description: 'Search query string' })
  @ApiQuery({ name: 'order_by', required: false, enum: ['question', 'createdAt'], description: 'Sort by question or creation date' })
  @ApiQuery({ name: 'order_dir', required: false, enum: ['asc', 'desc'], description: 'Sort direction' })
  @ApiQuery({ name: 'limit', required: false, description: 'Limit number of results', type: Number })
  @ApiQuery({ name: 'offset', required: false, description: 'Offset for pagination', type: Number })
  @ApiResponse({ status: 200, description: 'List of FAQs' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findAll(@Query() searchDto: SearchDto) {
    return this.marqueesService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a FAQ by ID' })
  @ApiParam({ name: 'id', description: 'FAQ ID' })
  @ApiResponse({ status: 200, description: 'FAQ found' })
  @ApiResponse({ status: 404, description: 'FAQ not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.marqueesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a FAQ' })
  @ApiParam({ name: 'id', description: 'FAQ ID' })
  @ApiResponse({ status: 200, description: 'FAQ updated successfully' })
  @ApiResponse({ status: 404, description: 'FAQ not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  update(@Param('id') id: string, @Body() updateMarqueeDto: UpdateMarqueeDto) {
    return this.marqueesService.update(+id, updateMarqueeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a FAQ' })
  @ApiParam({ name: 'id', description: 'FAQ ID' })
  @ApiResponse({ status: 200, description: 'FAQ deleted successfully' })
  @ApiResponse({ status: 404, description: 'FAQ not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.marqueesService.remove(+id);
  }
}
