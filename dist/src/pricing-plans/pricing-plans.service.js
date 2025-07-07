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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingPlansService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PricingPlansService = class PricingPlansService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPricingPlanDto) {
        try {
            return await this.prisma.pricingPlans.create({
                data: {
                    ...createPricingPlanDto,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error creating pricing plan');
        }
    }
    async findAll(searchDto) {
        const { q, order_by = 'createdAt', order_dir = 'desc', limit, offset, } = searchDto || {};
        const where = {};
        if (q) {
            where.OR = [
                { name: { contains: q } },
            ];
        }
        const orderBy = {};
        if (order_by === 'name') {
            orderBy.name = order_dir;
        }
        else {
            orderBy.createdAt = order_dir;
        }
        try {
            return await this.prisma.pricingPlans.findMany({
                where,
                orderBy,
                take: limit,
                skip: offset,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error retrieving pricing plans');
        }
    }
    async findOne(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('Invalid ID');
        }
        try {
            const pricingPlan = await this.prisma.pricingPlans.findUnique({
                where: { id },
            });
            if (!pricingPlan) {
                throw new common_1.NotFoundException(`Pricing plan with ID ${id} not found`);
            }
            return pricingPlan;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Error retrieving pricing plan');
        }
    }
    async update(id, updatePricingPlanDto) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('Invalid ID');
        }
        await this.findOne(id);
        try {
            return await this.prisma.pricingPlans.update({
                where: { id },
                data: {
                    ...updatePricingPlanDto,
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error updating pricing plan');
        }
    }
    async remove(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('Invalid ID');
        }
        await this.findOne(id);
        try {
            return await this.prisma.pricingPlans.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error deleting pricing plan');
        }
    }
};
exports.PricingPlansService = PricingPlansService;
exports.PricingPlansService = PricingPlansService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PricingPlansService);
//# sourceMappingURL=pricing-plans.service.js.map