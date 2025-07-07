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
import { EducationService } from './education.service';
import { CreateEducationDto, UpdateEducationDto } from '../../libs/dto/education.dto';
import { ErrorResponse } from '../../libs/errors/error.response';
import { SearchDto } from '../../libs/global/search.dto';

@ApiTags('education')
@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new education entry' })
  @ApiResponse({ status: 201, description: 'Education entry created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  create(@Body() createEducationDto: CreateEducationDto) {
    return this.educationService.create(createEducationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all education entries' })
  @ApiQuery({ name: 'q', required: false, description: 'Search query string' })
  @ApiQuery({ name: 'order_by', required: false, enum: ['institution', 'createdAt'], description: 'Sort by institution or creation date' })
  @ApiQuery({ name: 'order_dir', required: false, enum: ['asc', 'desc'], description: 'Sort direction' })
  @ApiQuery({ name: 'limit', required: false, description: 'Limit number of results', type: Number })
  @ApiQuery({ name: 'offset', required: false, description: 'Offset for pagination', type: Number })
  @ApiResponse({ status: 200, description: 'List of education entries' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findAll(@Query() searchDto: SearchDto) {
    return this.educationService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an education entry by ID' })
  @ApiParam({ name: 'id', description: 'Education entry ID' })
  @ApiResponse({ status: 200, description: 'Education entry found' })
  @ApiResponse({ status: 404, description: 'Education entry not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.educationService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an education entry' })
  @ApiParam({ name: 'id', description: 'Education entry ID' })
  @ApiResponse({ status: 200, description: 'Education entry updated successfully' })
  @ApiResponse({ status: 404, description: 'Education entry not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  update(@Param('id') id: string, @Body() updateEducationDto: UpdateEducationDto) {
    return this.educationService.update(+id, updateEducationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an education entry' })
  @ApiParam({ name: 'id', description: 'Education entry ID' })
  @ApiResponse({ status: 200, description: 'Education entry deleted successfully' })
  @ApiResponse({ status: 404, description: 'Education entry not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.educationService.remove(+id);
  }
}
