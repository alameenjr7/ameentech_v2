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
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { WorkExperiencesService } from './work-experiences.service';
import {
  CreateWorkExperienceDto,
  UpdateWorkExperienceDto,
} from '../../libs/dto/work-experience.dto';
import { ErrorResponse } from '../../libs/errors/error.response';
import { SearchDto } from '../../libs/global/search.dto';

@ApiTags('work-experiences')
@Controller('work-experiences')
export class WorkExperiencesController {
  constructor(
    private readonly workExperiencesService: WorkExperiencesService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new work experience' })
  @ApiResponse({
    status: 201,
    description: 'Work experience created successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  create(@Body() createWorkExperienceDto: CreateWorkExperienceDto) {
    return this.workExperiencesService.create(createWorkExperienceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all work experiences' })
  @ApiQuery({ name: 'q', required: false, description: 'Search query string' })
  @ApiQuery({
    name: 'order_by',
    required: false,
    enum: ['company', 'createdAt'],
    description: 'Sort by company or creation date',
  })
  @ApiQuery({
    name: 'order_dir',
    required: false,
    enum: ['asc', 'desc'],
    description: 'Sort direction',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Limit number of results',
    type: Number,
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    description: 'Offset for pagination',
    type: Number,
  })
  @ApiResponse({ status: 200, description: 'List of work experiences' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findAll(@Query() searchDto: SearchDto) {
    return this.workExperiencesService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a work experience by ID' })
  @ApiParam({ name: 'id', description: 'Work experience ID' })
  @ApiResponse({ status: 200, description: 'Work experience found' })
  @ApiResponse({
    status: 404,
    description: 'Work experience not found',
    type: ErrorResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.workExperiencesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a work experience' })
  @ApiParam({ name: 'id', description: 'Work experience ID' })
  @ApiResponse({
    status: 200,
    description: 'Work experience updated successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Work experience not found',
    type: ErrorResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  update(
    @Param('id') id: string,
    @Body() updateWorkExperienceDto: UpdateWorkExperienceDto,
  ) {
    return this.workExperiencesService.update(+id, updateWorkExperienceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a work experience' })
  @ApiParam({ name: 'id', description: 'Work experience ID' })
  @ApiResponse({
    status: 200,
    description: 'Work experience deleted successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Work experience not found',
    type: ErrorResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.workExperiencesService.remove(+id);
  }
}
