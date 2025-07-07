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
exports.FaqsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const faqs_service_1 = require("./faqs.service");
const faq_dto_1 = require("../../libs/dto/faq.dto");
const error_response_1 = require("../../libs/errors/error.response");
const search_dto_1 = require("../../libs/global/search.dto");
let FaqsController = class FaqsController {
    constructor(faqsService) {
        this.faqsService = faqsService;
    }
    create(createFaqDto) {
        return this.faqsService.create(createFaqDto);
    }
    findAll(searchDto) {
        return this.faqsService.findAll(searchDto);
    }
    findOne(id) {
        return this.faqsService.findOne(+id);
    }
    update(id, updateFaqDto) {
        return this.faqsService.update(+id, updateFaqDto);
    }
    remove(id) {
        return this.faqsService.remove(+id);
    }
};
exports.FaqsController = FaqsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new FAQ' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'FAQ created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [faq_dto_1.CreateFaqDto]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all FAQs' }),
    (0, swagger_1.ApiQuery)({ name: 'q', required: false, description: 'Search query string' }),
    (0, swagger_1.ApiQuery)({ name: 'order_by', required: false, enum: ['question', 'createdAt'], description: 'Sort by question or creation date' }),
    (0, swagger_1.ApiQuery)({ name: 'order_dir', required: false, enum: ['asc', 'desc'], description: 'Sort direction' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Limit number of results', type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'offset', required: false, description: 'Offset for pagination', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of FAQs' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a FAQ by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'FAQ ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'FAQ found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'FAQ not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a FAQ' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'FAQ ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'FAQ updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'FAQ not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, faq_dto_1.UpdateFaqDto]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a FAQ' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'FAQ ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'FAQ deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'FAQ not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "remove", null);
exports.FaqsController = FaqsController = __decorate([
    (0, swagger_1.ApiTags)('faqs'),
    (0, common_1.Controller)('faqs'),
    __metadata("design:paramtypes", [faqs_service_1.FaqsService])
], FaqsController);
//# sourceMappingURL=faqs.controller.js.map