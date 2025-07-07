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
import { FaqsService } from './faqs.service';
import { CreateFaqDto, UpdateFaqDto } from '../../libs/dto/faq.dto';
import { ErrorResponse } from '../../libs/errors/error.response';
import { SearchDto } from '../../libs/global/search.dto';

@ApiTags('faqs')
@Controller('faqs')
export class FaqsController {
  constructor(private readonly faqsService: FaqsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new FAQ' })
  @ApiResponse({ status: 201, description: 'FAQ created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  create(@Body() createFaqDto: CreateFaqDto) {
    return this.faqsService.create(createFaqDto);
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
    return this.faqsService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a FAQ by ID' })
  @ApiParam({ name: 'id', description: 'FAQ ID' })
  @ApiResponse({ status: 200, description: 'FAQ found' })
  @ApiResponse({ status: 404, description: 'FAQ not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.faqsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a FAQ' })
  @ApiParam({ name: 'id', description: 'FAQ ID' })
  @ApiResponse({ status: 200, description: 'FAQ updated successfully' })
  @ApiResponse({ status: 404, description: 'FAQ not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
    return this.faqsService.update(+id, updateFaqDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a FAQ' })
  @ApiParam({ name: 'id', description: 'FAQ ID' })
  @ApiResponse({ status: 200, description: 'FAQ deleted successfully' })
  @ApiResponse({ status: 404, description: 'FAQ not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.faqsService.remove(+id);
  }
}
