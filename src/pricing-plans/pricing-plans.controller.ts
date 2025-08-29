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
import { PricingPlansService } from './pricing-plans.service';
import {
  CreatePricingPlanDto,
  UpdatePricingPlanDto,
} from '../../libs/dto/pricing-plan.dto';
import { ErrorResponse } from '../../libs/errors/error.response';
import { SearchDto } from '../../libs/global/search.dto';

@ApiTags('pricing-plans')
@Controller('pricing-plans')
export class PricingPlansController {
  constructor(private readonly pricingPlansService: PricingPlansService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new pricing plan' })
  @ApiResponse({
    status: 201,
    description: 'Pricing plan created successfully',
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  create(@Body() createPricingPlanDto: CreatePricingPlanDto) {
    return this.pricingPlansService.create(createPricingPlanDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pricing plans' })
  @ApiQuery({ name: 'q', required: false, description: 'Search query string' })
  @ApiQuery({
    name: 'order_by',
    required: false,
    enum: ['name', 'createdAt'],
    description: 'Sort by name or creation date',
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
  @ApiResponse({ status: 200, description: 'List of pricing plans' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findAll(@Query() searchDto: SearchDto) {
    return this.pricingPlansService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a pricing plan by ID' })
  @ApiParam({ name: 'id', description: 'Pricing plan ID' })
  @ApiResponse({ status: 200, description: 'Pricing plan found' })
  @ApiResponse({
    status: 404,
    description: 'Pricing plan not found',
    type: ErrorResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.pricingPlansService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a pricing plan' })
  @ApiParam({ name: 'id', description: 'Pricing plan ID' })
  @ApiResponse({
    status: 200,
    description: 'Pricing plan updated successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Pricing plan not found',
    type: ErrorResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  update(
    @Param('id') id: string,
    @Body() updatePricingPlanDto: UpdatePricingPlanDto,
  ) {
    return this.pricingPlansService.update(+id, updatePricingPlanDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a pricing plan' })
  @ApiParam({ name: 'id', description: 'Pricing plan ID' })
  @ApiResponse({
    status: 200,
    description: 'Pricing plan deleted successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Pricing plan not found',
    type: ErrorResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.pricingPlansService.remove(+id);
  }
}
