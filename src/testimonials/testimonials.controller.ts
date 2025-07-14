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
import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto, UpdateTestimonialDto } from '../../libs/dto/testimonial.dto';
import { ErrorResponse } from '../../libs/errors/error.response';
import { SearchDto } from '../../libs/global/search.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('testimonials')
@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new testimonial' })
  @ApiResponse({ status: 201, description: 'Testimonial created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Data to create a testimonial, including an image (avatar).',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'John Doe' },
        role: { type: 'string', example: 'CEO' },
        text: { type: 'string', example: 'This is a testimonial' },
        rating: { type: 'number', example: 5 },
        avatar: { type: 'string', format: 'binary', description: 'Image du témoignage' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('avatar'))
  create(@Body() createTestimonialDto: CreateTestimonialDto, @UploadedFile() file?: Express.Multer.File) {
    return this.testimonialsService.create(createTestimonialDto, file);
  }

  @Get()
  @ApiOperation({ summary: 'Get all testimonials' })
  @ApiQuery({ name: 'q', required: false, description: 'Search query string' })
  @ApiQuery({ name: 'order_by', required: false, enum: ['name', 'createdAt'], description: 'Sort by name or creation date' })
  @ApiQuery({ name: 'order_dir', required: false, enum: ['asc', 'desc'], description: 'Sort direction' })
  @ApiQuery({ name: 'limit', required: false, description: 'Limit number of results', type: Number })
  @ApiQuery({ name: 'offset', required: false, description: 'Offset for pagination', type: Number })
  @ApiResponse({ status: 200, description: 'List of testimonials' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findAll(@Query() searchDto: SearchDto) {
    return this.testimonialsService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a testimonial by ID' })
  @ApiParam({ name: 'id', description: 'Testimonial ID' })
  @ApiResponse({ status: 200, description: 'Testimonial found' })
  @ApiResponse({ status: 404, description: 'Testimonial not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.testimonialsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a testimonial' })
  @ApiResponse({ status: 200, description: 'Testimonial updated successfully' })
  @ApiResponse({ status: 404, description: 'Testimonial not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Data to update a testimonial. All fields are optional.',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'John Doe' },
        role: { type: 'string', example: 'CEO' },
        text: { type: 'string', example: 'This is a testimonial' },
        rating: { type: 'number', example: 5 },
        avatar: { type: 'string', format: 'binary', description: 'Image du témoignage' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('avatar'))
  update(
    @Param('id') id: string,
    @Body() updateTestimonialDto: UpdateTestimonialDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.testimonialsService.update(+id, updateTestimonialDto, file);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a testimonial' })
  @ApiParam({ name: 'id', description: 'Testimonial ID' })
  @ApiResponse({ status: 200, description: 'Testimonial deleted successfully' })
  @ApiResponse({ status: 404, description: 'Testimonial not found', type: ErrorResponse })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.testimonialsService.remove(+id);
  }
}
