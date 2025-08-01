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
exports.WorkExperiencesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const work_experiences_service_1 = require("./work-experiences.service");
const work_experience_dto_1 = require("../../libs/dto/work-experience.dto");
const error_response_1 = require("../../libs/errors/error.response");
const search_dto_1 = require("../../libs/global/search.dto");
let WorkExperiencesController = class WorkExperiencesController {
    constructor(workExperiencesService) {
        this.workExperiencesService = workExperiencesService;
    }
    create(createWorkExperienceDto) {
        return this.workExperiencesService.create(createWorkExperienceDto);
    }
    findAll(searchDto) {
        return this.workExperiencesService.findAll(searchDto);
    }
    findOne(id) {
        return this.workExperiencesService.findOne(+id);
    }
    update(id, updateWorkExperienceDto) {
        return this.workExperiencesService.update(+id, updateWorkExperienceDto);
    }
    remove(id) {
        return this.workExperiencesService.remove(+id);
    }
};
exports.WorkExperiencesController = WorkExperiencesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new work experience' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Work experience created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [work_experience_dto_1.CreateWorkExperienceDto]),
    __metadata("design:returntype", void 0)
], WorkExperiencesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all work experiences' }),
    (0, swagger_1.ApiQuery)({ name: 'q', required: false, description: 'Search query string' }),
    (0, swagger_1.ApiQuery)({ name: 'order_by', required: false, enum: ['company', 'createdAt'], description: 'Sort by company or creation date' }),
    (0, swagger_1.ApiQuery)({ name: 'order_dir', required: false, enum: ['asc', 'desc'], description: 'Sort direction' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Limit number of results', type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'offset', required: false, description: 'Offset for pagination', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of work experiences' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], WorkExperiencesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a work experience by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Work experience ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Work experience found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Work experience not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkExperiencesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a work experience' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Work experience ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Work experience updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Work experience not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, work_experience_dto_1.UpdateWorkExperienceDto]),
    __metadata("design:returntype", void 0)
], WorkExperiencesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a work experience' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Work experience ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Work experience deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Work experience not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkExperiencesController.prototype, "remove", null);
exports.WorkExperiencesController = WorkExperiencesController = __decorate([
    (0, swagger_1.ApiTags)('work-experiences'),
    (0, common_1.Controller)('work-experiences'),
    __metadata("design:paramtypes", [work_experiences_service_1.WorkExperiencesService])
], WorkExperiencesController);
//# sourceMappingURL=work-experiences.controller.js.map