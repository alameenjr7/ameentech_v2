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
exports.MarqueesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const error_response_1 = require("../../libs/errors/error.response");
const search_dto_1 = require("../../libs/global/search.dto");
const marquee_service_1 = require("./marquee.service");
const marquee_dto_1 = require("../../libs/dto/marquee.dto");
let MarqueesController = class MarqueesController {
    constructor(marqueesService) {
        this.marqueesService = marqueesService;
    }
    create(createMarqueeDto) {
        return this.marqueesService.create(createMarqueeDto);
    }
    findAll(searchDto) {
        return this.marqueesService.findAll(searchDto);
    }
    findOne(id) {
        return this.marqueesService.findOne(+id);
    }
    update(id, updateMarqueeDto) {
        return this.marqueesService.update(+id, updateMarqueeDto);
    }
    remove(id) {
        return this.marqueesService.remove(+id);
    }
};
exports.MarqueesController = MarqueesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new FAQ' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'FAQ created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [marquee_dto_1.CreateMarqueeDto]),
    __metadata("design:returntype", void 0)
], MarqueesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all FAQs' }),
    (0, swagger_1.ApiQuery)({ name: 'q', required: false, description: 'Search query string' }),
    (0, swagger_1.ApiQuery)({
        name: 'order_by',
        required: false,
        enum: ['question', 'createdAt'],
        description: 'Sort by question or creation date',
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
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of FAQs' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], MarqueesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a FAQ by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'FAQ ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'FAQ found' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'FAQ not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarqueesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a FAQ' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'FAQ ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'FAQ updated successfully' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'FAQ not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, marquee_dto_1.UpdateMarqueeDto]),
    __metadata("design:returntype", void 0)
], MarqueesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a FAQ' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'FAQ ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'FAQ deleted successfully' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'FAQ not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarqueesController.prototype, "remove", null);
exports.MarqueesController = MarqueesController = __decorate([
    (0, swagger_1.ApiTags)('marquees'),
    (0, common_1.Controller)('marquees'),
    __metadata("design:paramtypes", [marquee_service_1.MarqueesService])
], MarqueesController);
//# sourceMappingURL=marquee.controller.js.map