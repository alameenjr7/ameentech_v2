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
exports.EducationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const education_service_1 = require("./education.service");
const education_dto_1 = require("../../libs/dto/education.dto");
const error_response_1 = require("../../libs/errors/error.response");
const search_dto_1 = require("../../libs/global/search.dto");
let EducationController = class EducationController {
    constructor(educationService) {
        this.educationService = educationService;
    }
    create(createEducationDto) {
        return this.educationService.create(createEducationDto);
    }
    findAll(searchDto) {
        return this.educationService.findAll(searchDto);
    }
    findOne(id) {
        return this.educationService.findOne(+id);
    }
    update(id, updateEducationDto) {
        return this.educationService.update(+id, updateEducationDto);
    }
    remove(id) {
        return this.educationService.remove(+id);
    }
};
exports.EducationController = EducationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new education entry' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Education entry created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [education_dto_1.CreateEducationDto]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all education entries' }),
    (0, swagger_1.ApiQuery)({ name: 'q', required: false, description: 'Search query string' }),
    (0, swagger_1.ApiQuery)({ name: 'order_by', required: false, enum: ['institution', 'createdAt'], description: 'Sort by institution or creation date' }),
    (0, swagger_1.ApiQuery)({ name: 'order_dir', required: false, enum: ['asc', 'desc'], description: 'Sort direction' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Limit number of results', type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'offset', required: false, description: 'Offset for pagination', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of education entries' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get an education entry by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Education entry ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Education entry found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Education entry not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an education entry' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Education entry ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Education entry updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Education entry not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, education_dto_1.UpdateEducationDto]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an education entry' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Education entry ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Education entry deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Education entry not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EducationController.prototype, "remove", null);
exports.EducationController = EducationController = __decorate([
    (0, swagger_1.ApiTags)('education'),
    (0, common_1.Controller)('education'),
    __metadata("design:paramtypes", [education_service_1.EducationService])
], EducationController);
//# sourceMappingURL=education.controller.js.map