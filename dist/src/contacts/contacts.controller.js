"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const contacts_service_1 = require("./contacts.service");
const contact_dto_1 = require("../../libs/dto/contact.dto");
const contact_dto_2 = require("../../libs/dto/contact.dto");
const error_response_1 = require("../../libs/errors/error.response");
let ContactsController = class ContactsController {
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    create(createContactDto) {
        return this.contactsService.create(createContactDto);
    }
    findAll(query) {
        const { email, interest, ...searchDto } = query;
        if (email) {
            return this.contactsService.findByEmail(email);
        }
        if (interest) {
            return this.contactsService.findByInterest(interest);
        }
        return this.contactsService.findAll(searchDto);
    }
    findOne(id) {
        return this.contactsService.findOne(+id);
    }
    update(id, updateContactDto) {
        return this.contactsService.update(+id, updateContactDto);
    }
    remove(id) {
        return this.contactsService.remove(+id);
    }
};
exports.ContactsController = ContactsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new contact' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Contact created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all contacts' }),
    (0, swagger_1.ApiQuery)({ name: 'q', required: false, description: 'Search query string' }),
    (0, swagger_1.ApiQuery)({
        name: 'order_by',
        required: false,
        enum: ['name', 'created_at'],
        description: 'Sort by name or creation date',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'order_dir',
        required: false,
        enum: ['asc', 'desc'],
        description: 'Sort direction',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        description: 'Limit number of results',
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'offset',
        required: false,
        description: 'Offset for pagination',
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({ name: 'email', required: false, description: 'Filter by email' }),
    (0, swagger_1.ApiQuery)({
        name: 'interest',
        required: false,
        description: 'Filter by interest',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of contacts' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a contact by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Contact ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Contact found' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Contact not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a contact' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Contact ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Contact updated successfully' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Contact not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, contact_dto_2.UpdateContactDto]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a contact' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Contact ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Contact deleted successfully' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Contact not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "remove", null);
exports.ContactsController = ContactsController = __decorate([
    (0, swagger_1.ApiTags)('contacts'),
    (0, common_1.Controller)('contacts'),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService])
], ContactsController);
//# sourceMappingURL=contacts.controller.js.map