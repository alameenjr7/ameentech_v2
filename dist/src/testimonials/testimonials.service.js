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
exports.TestimonialsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TestimonialsService = class TestimonialsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTestimonialDto) {
        try {
            return await this.prisma.testimonials.create({
                data: {
                    ...createTestimonialDto,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error creating testimonial');
        }
    }
    async findAll(searchDto) {
        const { q, order_by = 'createdAt', order_dir = 'desc', limit, offset, } = searchDto || {};
        const where = {};
        if (q) {
            where.OR = [
                { name: { contains: q } },
                { role: { contains: q } },
                { text: { contains: q } },
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
            return await this.prisma.testimonials.findMany({
                where,
                orderBy,
                take: limit,
                skip: offset,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error retrieving testimonials');
        }
    }
    async findOne(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('Invalid ID');
        }
        try {
            const testimonial = await this.prisma.testimonials.findUnique({
                where: { id },
            });
            if (!testimonial) {
                throw new common_1.NotFoundException(`Testimonial with ID ${id} not found`);
            }
            return testimonial;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Error retrieving testimonial');
        }
    }
    async update(id, updateTestimonialDto) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('Invalid ID');
        }
        await this.findOne(id);
        try {
            return await this.prisma.testimonials.update({
                where: { id },
                data: {
                    ...updateTestimonialDto,
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error updating testimonial');
        }
    }
    async remove(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('Invalid ID');
        }
        await this.findOne(id);
        try {
            return await this.prisma.testimonials.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error deleting testimonial');
        }
    }
};
exports.TestimonialsService = TestimonialsService;
exports.TestimonialsService = TestimonialsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TestimonialsService);
//# sourceMappingURL=testimonials.service.js.map