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
exports.PricingPlansController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pricing_plans_service_1 = require("./pricing-plans.service");
const pricing_plan_dto_1 = require("../../libs/dto/pricing-plan.dto");
const error_response_1 = require("../../libs/errors/error.response");
const search_dto_1 = require("../../libs/global/search.dto");
let PricingPlansController = class PricingPlansController {
    constructor(pricingPlansService) {
        this.pricingPlansService = pricingPlansService;
    }
    create(createPricingPlanDto) {
        return this.pricingPlansService.create(createPricingPlanDto);
    }
    findAll(searchDto) {
        return this.pricingPlansService.findAll(searchDto);
    }
    findOne(id) {
        return this.pricingPlansService.findOne(+id);
    }
    update(id, updatePricingPlanDto) {
        return this.pricingPlansService.update(+id, updatePricingPlanDto);
    }
    remove(id) {
        return this.pricingPlansService.remove(+id);
    }
};
exports.PricingPlansController = PricingPlansController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new pricing plan' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Pricing plan created successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pricing_plan_dto_1.CreatePricingPlanDto]),
    __metadata("design:returntype", void 0)
], PricingPlansController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all pricing plans' }),
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
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of pricing plans' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchDto]),
    __metadata("design:returntype", void 0)
], PricingPlansController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a pricing plan by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Pricing plan ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pricing plan found' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Pricing plan not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PricingPlansController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a pricing plan' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Pricing plan ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Pricing plan updated successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Pricing plan not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pricing_plan_dto_1.UpdatePricingPlanDto]),
    __metadata("design:returntype", void 0)
], PricingPlansController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a pricing plan' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Pricing plan ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Pricing plan deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Pricing plan not found',
        type: error_response_1.ErrorResponse,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request', type: error_response_1.ErrorResponse }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PricingPlansController.prototype, "remove", null);
exports.PricingPlansController = PricingPlansController = __decorate([
    (0, swagger_1.ApiTags)('pricing-plans'),
    (0, common_1.Controller)('pricing-plans'),
    __metadata("design:paramtypes", [pricing_plans_service_1.PricingPlansService])
], PricingPlansController);
//# sourceMappingURL=pricing-plans.controller.js.map