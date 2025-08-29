import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from '../../libs/dto/service.dto';
import { UpdateServiceDto } from '../../libs/dto/service.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SearchDto } from '../../libs/global/search.dto';
import { ErrorResponse } from '../../libs/errors/error.response';

@ApiTags('services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new service' })
  @ApiResponse({ status: 201, description: 'Service created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all services' })
  @ApiResponse({ status: 200, description: 'Services retrieved successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findAll(@Query() searchDto: SearchDto) {
    return this.servicesService.findAll(searchDto);
  }

  @Get('active')
  @ApiOperation({ summary: 'Get active services' })
  @ApiResponse({
    status: 200,
    description: 'Active services retrieved successfully',
  })
  findActive() {
    return this.servicesService.findActive();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a service by ID' })
  @ApiResponse({ status: 200, description: 'Service retrieved successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({
    status: 404,
    description: 'Service not found',
    type: ErrorResponse,
  })
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a service' })
  @ApiResponse({ status: 200, description: 'Service updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({
    status: 404,
    description: 'Service not found',
    type: ErrorResponse,
  })
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update(+id, updateServiceDto);
  }

  @Put(':id/toggle')
  @ApiOperation({ summary: 'Toggle service active status' })
  @ApiResponse({
    status: 200,
    description: 'Service active status toggled successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({
    status: 404,
    description: 'Service not found',
    type: ErrorResponse,
  })
  toggleActive(@Param('id') id: string) {
    return this.servicesService.toggleActive(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a service' })
  @ApiResponse({ status: 200, description: 'Service deleted successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  @ApiResponse({
    status: 404,
    description: 'Service not found',
    type: ErrorResponse,
  })
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
