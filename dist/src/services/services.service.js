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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ServicesService = class ServicesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createServiceDto) {
        try {
            return await this.prisma.service.create({
                data: {
                    ...createServiceDto,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la création du service');
        }
    }
    async findAll(searchDto) {
        const { q, order_by = 'createdAt', order_dir = 'desc', limit, offset, } = searchDto || {};
        const where = {};
        if (q) {
            where.OR = [{ title: { contains: q } }, { description: { contains: q } }];
        }
        const orderBy = {};
        if (order_by === 'title') {
            orderBy.title = order_dir;
        }
        else {
            orderBy.createdAt = order_dir;
        }
        try {
            return await this.prisma.service.findMany({
                where,
                orderBy,
                take: limit,
                skip: offset,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la récupération des services');
        }
    }
    async findActive() {
        try {
            return await this.prisma.service.findMany({
                where: { isActive: true },
                orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la récupération des services actifs');
        }
    }
    async findOne(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        try {
            const service = await this.prisma.service.findUnique({
                where: { id },
            });
            if (!service) {
                throw new common_1.NotFoundException(`Service avec l'ID ${id} non trouvé`);
            }
            return service;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Erreur lors de la récupération du service');
        }
    }
    async update(id, updateServiceDto) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        try {
            return await this.prisma.service.update({
                where: { id },
                data: {
                    ...updateServiceDto,
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la mise à jour du service');
        }
    }
    async remove(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        try {
            return await this.prisma.service.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la suppression du service');
        }
    }
    async toggleActive(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        try {
            const service = await this.prisma.service.findUnique({
                where: { id },
            });
            if (!service) {
                throw new common_1.NotFoundException(`Service avec l'ID ${id} non trouvé`);
            }
            const updatedService = await this.prisma.service.update({
                where: { id },
                data: { isActive: !service.isActive },
            });
            return updatedService;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Erreur lors de la mise à jour du statut actif du service');
        }
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServicesService);
//# sourceMappingURL=services.service.js.map