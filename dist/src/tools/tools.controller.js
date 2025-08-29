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
exports.ToolsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tools_service_1 = require("./tools.service");
const tool_dto_1 = require("../../libs/dto/tool.dto");
const error_response_1 = require("../../libs/errors/error.response");
const search_dto_1 = require("../../libs/global/search.dto");
let ToolsController = class ToolsController {
    constructor(toolsService) {
        this.toolsService = toolsService;
    }
    create(createToolDto) {
        return this.toolsService.create(createToolDto);
    }
    findAll(searchDto) {
        return this.toolsService.findAll(searchDto);
    }
    findOne(id) {
        return this.toolsService.findOne(+id);
    }
    update(id, updateToolDto) {
        return this.toolsService.update(+id, updateToolDto);
    }
    remove(id) {
        return this.toolsService.remove(+id);
    }
};
exports.ToolsController = ToolsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tool' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Tool created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tool_dto_1.CreateToolDto]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tools' }),
    (0, swagger_1.ApiQuery)({ name: 'q', required: false, description: 'Search query string' }),
    (0, swagger_1.ApiQuery)({
        name: 'order_by',
        required: false,
        enum: ['name', 'createdAt'],
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
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of tools' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tool by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Tool ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tool found' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Tool not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tool' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Tool ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tool updated successfully' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Tool not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tool_dto_1.UpdateToolDto]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tool' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Tool ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Tool deleted successfully' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Tool not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "remove", null);
exports.ToolsController = ToolsController = __decorate([
    (0, swagger_1.ApiTags)('tools'),
    (0, common_1.Controller)('tools'),
    __metadata("design:paramtypes", [tools_service_1.ToolsService])
], ToolsController);
//# sourceMappingURL=tools.controller.js.map