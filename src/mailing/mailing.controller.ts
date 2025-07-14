import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MailingService } from './mailing.service';
import { ApiOperation, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import { ErrorResponse } from 'libs/errors/error.response';
import { SearchDto } from 'libs/global/search.dto';
import { CreateMailingDto, UpdateMailingDto } from 'libs/dto/mailing.dto';

@Controller('mailing')
export class MailingController {
    constructor(private readonly mailingService: MailingService) { }

    @Post()
    @ApiOperation({ summary: 'Create a new Mailing' })
    @ApiResponse({ status: 201, description: 'Mailing created successfully' })
    @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
    create(@Body() createMailingDto: CreateMailingDto) {
        return this.mailingService.create(createMailingDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all Mailings' })
    @ApiQuery({ name: 'q', required: false, description: 'Search query string' })
    @ApiQuery({ name: 'order_by', required: false, enum: ['question', 'createdAt'], description: 'Sort by question or creation date' })
    @ApiQuery({ name: 'order_dir', required: false, enum: ['asc', 'desc'], description: 'Sort direction' })
    @ApiQuery({ name: 'limit', required: false, description: 'Limit number of results', type: Number })
    @ApiQuery({ name: 'offset', required: false, description: 'Offset for pagination', type: Number })
    @ApiResponse({ status: 200, description: 'List of Mailings' })
    @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
    findAll(@Query() searchDto: SearchDto) {
        return this.mailingService.findAll(searchDto);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a Mailing by ID' })
    @ApiParam({ name: 'id', description: 'Mailing ID' })
    @ApiResponse({ status: 200, description: 'Mailing found' })
    @ApiResponse({ status: 404, description: 'Mailing not found', type: ErrorResponse })
    @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
    findOne(@Param('id') id: string) {
        return this.mailingService.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a Mailing' })
    @ApiParam({ name: 'id', description: 'Mailing ID' })
    @ApiResponse({ status: 200, description: 'Mailing updated successfully' })
    @ApiResponse({ status: 404, description: 'Mailing not found', type: ErrorResponse })
    @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
    update(@Param('id') id: string, @Body() updateMailingDto: UpdateMailingDto) {
        return this.mailingService.update(+id, updateMailingDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a Mailing' })
    @ApiParam({ name: 'id', description: 'Mailing ID' })
    @ApiResponse({ status: 200, description: 'Mailing deleted successfully' })
    @ApiResponse({ status: 404, description: 'Mailing not found', type: ErrorResponse })
    @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
    remove(@Param('id') id: string) {
        return this.mailingService.remove(+id);
    }
}
