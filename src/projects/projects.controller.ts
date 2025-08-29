import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDto } from '../../libs/dto/project.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { SearchDto } from '../../libs/global/search.dto';
import { ErrorResponse } from '../../libs/errors/error.response';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new project' })
  @ApiResponse({ status: 201, description: 'Project created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Data to create a project, including an image.',
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'Project Title' },
        description: { type: 'string', example: 'Project Description' },
        category: { type: 'string', example: 'Web Development' },
        clientName: { type: 'string', example: 'Client Name' },
        projectUrl: { type: 'string', example: 'https://example.com' },
        technologies: { type: 'string', example: '["React", "Node.js"]' },
        tags: { type: 'string', example: '["Web", "API"]' },
        slug: { type: 'string', example: 'project-slug' },
        isNew: { type: 'boolean', example: true },
        isFeatured: { type: 'boolean', example: true },
        isActive: { type: 'boolean', example: true },
        order: { type: 'number', example: 1 },
        serviceId: { type: 'number', example: 1 },
        image: {
          type: 'string',
          format: 'binary',
          description: 'Image du projet',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('image'))
  create(
    @Body() createProjectDto: CreateProjectDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.projectsService.create(createProjectDto, file);
  }

  @Get()
  @ApiOperation({ summary: 'Get all projects' })
  @ApiResponse({ status: 200, description: 'Projects retrieved successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findAll(@Query() searchDto: SearchDto) {
    // if (technology) {
    //   return this.projectsService.findByTechnology(technology);
    // }
    return this.projectsService.findAll(searchDto);
  }

  @Get('active')
  @ApiOperation({ summary: 'Get active projects' })
  @ApiResponse({
    status: 200,
    description: 'Active projects retrieved successfully',
  })
  findActive() {
    return this.projectsService.findActive();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a project by ID' })
  @ApiResponse({ status: 200, description: 'Project retrieved successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({
    status: 404,
    description: 'Project not found',
    type: ErrorResponse,
  })
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a project' })
  @ApiResponse({ status: 200, description: 'Project updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({
    status: 404,
    description: 'Project not found',
    type: ErrorResponse,
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Data to update a project. All fields are optional.',
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        description: { type: 'string' },
        category: { type: 'string' },
        clientName: { type: 'string' },
        projectUrl: { type: 'string' },
        technologies: { type: 'string' },
        tags: { type: 'string' },
        slug: { type: 'string' },
        isNew: { type: 'boolean' },
        isFeatured: { type: 'boolean' },
        isActive: { type: 'boolean' },
        order: { type: 'number' },
        image: {
          type: 'string',
          format: 'binary',
          description: 'Image du projet',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.projectsService.update(+id, updateProjectDto, file);
  }

  @Put(':id/toggle')
  @ApiOperation({ summary: 'Toggle project active status' })
  @ApiResponse({
    status: 200,
    description: 'Project active status toggled successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({
    status: 404,
    description: 'Project not found',
    type: ErrorResponse,
  })
  toggleActive(@Param('id') id: string) {
    return this.projectsService.toggleActive(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a project' })
  @ApiResponse({ status: 200, description: 'Project deleted successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({
    status: 404,
    description: 'Project not found',
    type: ErrorResponse,
  })
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}
