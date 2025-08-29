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
exports.ServicesController = void 0;
const common_1 = require("@nestjs/common");
const services_service_1 = require("./services.service");
const service_dto_1 = require("../../libs/dto/service.dto");
const service_dto_2 = require("../../libs/dto/service.dto");
const swagger_1 = require("@nestjs/swagger");
const search_dto_1 = require("../../libs/global/search.dto");
const error_response_1 = require("../../libs/errors/error.response");
let ServicesController = class ServicesController {
    constructor(servicesService) {
        this.servicesService = servicesService;
    }
    create(createServiceDto) {
        return this.servicesService.create(createServiceDto);
    }
    findAll(searchDto) {
        return this.servicesService.findAll(searchDto);
    }
    findActive() {
        return this.servicesService.findActive();
    }
    findOne(id) {
        return this.servicesService.findOne(+id);
    }
    update(id, updateServiceDto) {
        return this.servicesService.update(+id, updateServiceDto);
    }
    toggleActive(id) {
        return this.servicesService.toggleActive(+id);
    }
    remove(id) {
        return this.servicesService.remove(+id);
    }
};
exports.ServicesController = ServicesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new service' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Service created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [service_dto_1.CreateServiceDto]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all services' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Services retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('active'),
    (0, swagger_1.ApiOperation)({ summary: 'Get active services' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Active services retrieved successfully',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "findActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a service by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Service retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Service not found',
        type: error_response_1.ErrorResponse,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a service' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Service updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Service not found',
        type: error_response_1.ErrorResponse,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, service_dto_2.UpdateServiceDto]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/toggle'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle service active status' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Service active status toggled successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Service not found',
        type: error_response_1.ErrorResponse,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "toggleActive", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a service' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Service deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Service not found',
        type: error_response_1.ErrorResponse,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "remove", null);
exports.ServicesController = ServicesController = __decorate([
    (0, swagger_1.ApiTags)('services'),
    (0, common_1.Controller)('services'),
    __metadata("design:paramtypes", [services_service_1.ServicesService])
], ServicesController);
//# sourceMappingURL=services.controller.js.map