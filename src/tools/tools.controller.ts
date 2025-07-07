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
import { ToolsService } from './tools.service';
import { CreateToolDto, UpdateToolDto } from '../../libs/dto/tool.dto';
import { ErrorResponse } from '../../libs/errors/error.response';
import { SearchDto } from '../../libs/global/search.dto';

@ApiTags('tools')
@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tool' })
  @ApiResponse({ status: 201, description: 'Tool created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolsService.create(createToolDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tools' })
  @ApiQuery({ name: 'q', required: false, description: 'Search query string' })
  @ApiQuery({ name: 'order_by', required: false, enum: ['name', 'createdAt'], description: 'Sort by name or creation date' })
  @ApiQuery({ name: 'order_dir', required: false, enum: ['asc', 'desc'], description: 'Sort direction' })
  @ApiQuery({ name: 'limit', required: false, description: 'Limit number of results', type: Number })
  @ApiQuery({ name: 'offset', required: false, description: 'Offset for pagination', type: Number })
  @ApiResponse({ status: 200, description: 'List of tools' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findAll(@Query() searchDto: SearchDto) {
    return this.toolsService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tool by ID' })
  @ApiParam({ name: 'id', description: 'Tool ID' })
  @ApiResponse({ status: 200, description: 'Tool found' })
  @ApiResponse({ status: 404, description: 'Tool not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.toolsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tool' })
  @ApiParam({ name: 'id', description: 'Tool ID' })
  @ApiResponse({ status: 200, description: 'Tool updated successfully' })
  @ApiResponse({ status: 404, description: 'Tool not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  update(@Param('id') id: string, @Body() updateToolDto: UpdateToolDto) {
    return this.toolsService.update(+id, updateToolDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tool' })
  @ApiParam({ name: 'id', description: 'Tool ID' })
  @ApiResponse({ status: 200, description: 'Tool deleted successfully' })
  @ApiResponse({ status: 404, description: 'Tool not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.toolsService.remove(+id);
  }
}
