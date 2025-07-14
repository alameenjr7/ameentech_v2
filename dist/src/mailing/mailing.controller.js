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
exports.MailingController = void 0;
const common_1 = require("@nestjs/common");
const mailing_service_1 = require("./mailing.service");
const swagger_1 = require("@nestjs/swagger");
const error_response_1 = require("../../libs/errors/error.response");
const search_dto_1 = require("../../libs/global/search.dto");
const mailing_dto_1 = require("../../libs/dto/mailing.dto");
let MailingController = class MailingController {
    constructor(mailingService) {
        this.mailingService = mailingService;
    }
    create(createMailingDto) {
        return this.mailingService.create(createMailingDto);
    }
    findAll(searchDto) {
        return this.mailingService.findAll(searchDto);
    }
    findOne(id) {
        return this.mailingService.findOne(+id);
    }
    update(id, updateMailingDto) {
        return this.mailingService.update(+id, updateMailingDto);
    }
    remove(id) {
        return this.mailingService.remove(+id);
    }
};
exports.MailingController = MailingController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Mailing' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Mailing created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mailing_dto_1.CreateMailingDto]),
    __metadata("design:returntype", void 0)
], MailingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Mailings' }),
    (0, swagger_1.ApiQuery)({ name: 'q', required: false, description: 'Search query string' }),
    (0, swagger_1.ApiQuery)({ name: 'order_by', required: false, enum: ['question', 'createdAt'], description: 'Sort by question or creation date' }),
    (0, swagger_1.ApiQuery)({ name: 'order_dir', required: false, enum: ['asc', 'desc'], description: 'Sort direction' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Limit number of results', type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'offset', required: false, description: 'Offset for pagination', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of Mailings' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], MailingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Mailing by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Mailing ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mailing found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Mailing not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MailingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Mailing' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Mailing ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mailing updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Mailing not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, mailing_dto_1.UpdateMailingDto]),
    __metadata("design:returntype", void 0)
], MailingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Mailing' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Mailing ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mailing deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Mailing not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MailingController.prototype, "remove", null);
exports.MailingController = MailingController = __decorate([
    (0, common_1.Controller)('mailing'),
    __metadata("design:paramtypes", [mailing_service_1.MailingService])
], MailingController);
//# sourceMappingURL=mailing.controller.js.map