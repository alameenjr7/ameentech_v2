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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const project_dto_1 = require("../../libs/dto/project.dto");
const swagger_1 = require("@nestjs/swagger");
const search_dto_1 = require("../../libs/global/search.dto");
const error_response_1 = require("../../libs/errors/error.response");
const platform_express_1 = require("@nestjs/platform-express");
let ProjectsController = class ProjectsController {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    create(createProjectDto, file) {
        return this.projectsService.create(createProjectDto, file);
    }
    findAll(searchDto) {
        return this.projectsService.findAll(searchDto);
    }
    findActive() {
        return this.projectsService.findActive();
    }
    findOne(id) {
        return this.projectsService.findOne(+id);
    }
    update(id, updateProjectDto, file) {
        return this.projectsService.update(+id, updateProjectDto, file);
    }
    toggleActive(id) {
        return this.projectsService.toggleActive(+id);
    }
    remove(id) {
        return this.projectsService.remove(+id);
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new project' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Project created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Data to create a project, including an image.',
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string', example: 'Project Title' },
                description: { type: 'string', example: 'Project Description' },
                category: { type: 'string', example: 'Web Development' },
                clientName: { type: 'string', example: 'Client Name' },
                projectUrl: { type: 'string', example: 'https://example.com' },
                technologies: { type: 'string', example: '["React", "Node.js"]' },
                tags: { type: 'string', example: '["Web", "API"]' },
                slug: { type: 'string', example: 'project-slug' },
                isNew: { type: 'boolean', example: true },
                isFeatured: { type: 'boolean', example: true },
                isActive: { type: 'boolean', example: true },
                order: { type: 'number', example: 1 },
                serviceId: { type: 'number', example: 1 },
                image: { type: 'string', format: 'binary', description: 'Image du projet' },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_dto_1.CreateProjectDto, Object]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all projects' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Projects retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    (0, swagger_1.ApiOperation)({ summary: 'Get active projects' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Active projects retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a project by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Project retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Project not found', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Project updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Project not found', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        description: 'Data to update a project. All fields are optional.',
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                description: { type: 'string' },
                category: { type: 'string' },
                clientName: { type: 'string' },
                projectUrl: { type: 'string' },
                technologies: { type: 'string' },
                tags: { type: 'string' },
                slug: { type: 'string' },
                isNew: { type: 'boolean' },
                isFeatured: { type: 'boolean' },
                isActive: { type: 'boolean' },
                order: { type: 'number' },
                image: { type: 'string', format: 'binary', description: 'Image du projet' },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, project_dto_1.UpdateProjectDto, Object]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/toggle'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle project active status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Project active status toggled successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Project not found', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "toggleActive", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a project' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Project deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Project not found', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "remove", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, swagger_1.ApiTags)('projects'),
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map