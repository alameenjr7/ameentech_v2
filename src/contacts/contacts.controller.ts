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
import { ContactsService } from './contacts.service';
import { CreateContactDto } from '../../libs/dto/contact.dto';
import { UpdateContactDto } from '../../libs/dto/contact.dto';
import { ErrorResponse } from '../../libs/errors/error.response';

@ApiTags('contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new contact' })
  @ApiResponse({ status: 201, description: 'Contact created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all contacts' })
  @ApiQuery({ name: 'q', required: false, description: 'Search query string' })
  @ApiQuery({
    name: 'order_by',
    required: false,
    enum: ['name', 'created_at'],
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
  @ApiQuery({ name: 'email', required: false, description: 'Filter by email' })
  @ApiQuery({
    name: 'interest',
    required: false,
    description: 'Filter by interest',
  })
  @ApiResponse({ status: 200, description: 'List of contacts' })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findAll(@Query() query: any) {
    const { email, interest, ...searchDto } = query;

    if (email) {
      return this.contactsService.findByEmail(email);
    }
    if (interest) {
      return this.contactsService.findByInterest(interest);
    }
    return this.contactsService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a contact by ID' })
  @ApiParam({ name: 'id', description: 'Contact ID' })
  @ApiResponse({ status: 200, description: 'Contact found' })
  @ApiResponse({
    status: 404,
    description: 'Contact not found',
    type: ErrorResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a contact' })
  @ApiParam({ name: 'id', description: 'Contact ID' })
  @ApiResponse({ status: 200, description: 'Contact updated successfully' })
  @ApiResponse({
    status: 404,
    description: 'Contact not found',
    type: ErrorResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(+id, updateContactDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a contact' })
  @ApiParam({ name: 'id', description: 'Contact ID' })
  @ApiResponse({ status: 200, description: 'Contact deleted successfully' })
  @ApiResponse({
    status: 404,
    description: 'Contact not found',
    type: ErrorResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad request', type: ErrorResponse })
  remove(@Param('id') id: string) {
    return this.contactsService.remove(+id);
  }
}
