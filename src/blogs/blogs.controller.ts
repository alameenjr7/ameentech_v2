import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { BlogsService } from './blogs.service';
import { CreateBlogDto, UpdateBlogDto } from '../../libs/dto/blog.dto';
import { ErrorResponse } from '../../libs/errors/error.response';
import { SearchDto } from '../../libs/global/search.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('blogs')
@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new blog post' })
  @ApiResponse({ status: 201, description: 'Blog post created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Données pour créer un article de blog, y compris une image.',
    schema: {
      type: 'object',
      properties: {
        category: { type: 'string', example: 'Technology' },
        date: { type: 'string', example: '2024-07-26' },
        title: { type: 'string', example: 'The Future of AI' },
        excerpt: { type: 'string', example: 'A brief overview...' },
        link: { type: 'string', example: 'https://example.com/blog/...' },
        image: {
          type: 'string',
          format: 'binary',
          description: 'Le fichier image pour l\'article de blog.',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() createBlogDto: CreateBlogDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.blogsService.create(createBlogDto, file);
  }

  @Get()
  @ApiOperation({ summary: 'Get all blog posts' })
  @ApiQuery({ name: 'q', required: false, description: 'Search query string' })
  @ApiQuery({ name: 'order_by', required: false, enum: ['title', 'createdAt'], description: 'Sort by title or creation date' })
  @ApiQuery({ name: 'order_dir', required: false, enum: ['asc', 'desc'], description: 'Sort direction' })
  @ApiQuery({ name: 'limit', required: false, description: 'Limit number of results', type: Number })
  @ApiQuery({ name: 'offset', required: false, description: 'Offset for pagination', type: Number })
  @ApiResponse({ status: 200, description: 'List of blog posts' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findAll(@Query() searchDto: SearchDto) {
    return this.blogsService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a blog post by ID' })
  @ApiParam({ name: 'id', description: 'Blog post ID' })
  @ApiResponse({ status: 200, description: 'Blog post found' })
  @ApiResponse({ status: 404, description: 'Blog post not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.blogsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a blog post' })
  @ApiParam({ name: 'id', description: 'Blog post ID' })
  @ApiResponse({ status: 200, description: 'Blog post updated successfully' })
  @ApiResponse({ status: 404, description: 'Blog post not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Données pour mettre à jour un article. Tous les champs sont optionnels.',
    schema: {
      type: 'object',
      properties: {
        category: { type: 'string' },
        date: { type: 'string' },
        title: { type: 'string' },
        excerpt: { type: 'string' },
        link: { type: 'string' },
        image: {
          type: 'string',
          format: 'binary',
          description: 'Un nouveau fichier image pour remplacer l\'ancien (optionnel).',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.blogsService.update(+id, updateBlogDto, file);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a blog post' })
  @ApiParam({ name: 'id', description: 'Blog post ID' })
  @ApiResponse({ status: 200, description: 'Blog post deleted successfully' })
  @ApiResponse({ status: 404, description: 'Blog post not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.blogsService.remove(+id);
  }
}
