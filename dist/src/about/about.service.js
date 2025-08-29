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
exports.AboutService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const sharp_service_1 = require("../../libs/sharp/sharp.service");
const fs_1 = require("fs");
const sharp_config_1 = require("../../libs/sharp/sharp.config");
let AboutService = class AboutService {
    constructor(prisma, sharpService) {
        this.prisma = prisma;
        this.sharpService = sharpService;
    }
    async create(data, file) {
        const createData = {
            ...data,
            paragraphs: JSON.stringify(data.paragraphs),
            stats: JSON.stringify(data.stats),
        };
        if (file && file.buffer) {
            createData.imageUrl = await this.sharpService.resizeImage(file.buffer, file.originalname);
        }
        const created = await this.prisma.about.create({ data: createData });
        return {
            ...created,
            paragraphs: JSON.parse(created.paragraphs),
            stats: JSON.parse(created.stats),
        };
    }
    async findAll(searchDto) {
        const { q, order_by = 'createdAt', order_dir = 'desc', limit, offset, } = searchDto || {};
        const where = {};
        if (q) {
            where.OR = [{ title: { contains: q } }, { stats: { contains: q } }];
        }
        const orderBy = {};
        if (order_by === 'title') {
            orderBy.title = order_dir;
        }
        else {
            orderBy.createdAt = order_dir;
        }
        try {
            return await this.prisma.about.findMany({
                where,
                orderBy,
                take: limit,
                skip: offset,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error retrieving About');
        }
    }
    async findOne(id) {
        const about = await this.prisma.about.findUnique({ where: { id } });
        if (!about)
            throw new common_1.NotFoundException('About not found');
        return {
            ...about,
            paragraphs: JSON.parse(about.paragraphs),
            stats: JSON.parse(about.stats),
        };
    }
    async update(id, data, file) {
        const about = await this.prisma.about.findUnique({ where: { id } });
        if (!about)
            throw new common_1.NotFoundException('About not found');
        const updateData = {
            ...data,
            paragraphs: data.paragraphs
                ? JSON.stringify(data.paragraphs)
                : about.paragraphs,
            stats: data.stats ? JSON.stringify(data.stats) : about.stats,
        };
        if (file && file.buffer) {
            updateData.imageUrl = await this.sharpService.resizeImage(file.buffer, file.originalname);
            if (about.imageUrl) {
                try {
                    const oldImagePath = sharp_config_1.sharpConfig.getOutputPath(about.imageUrl);
                    await fs_1.promises.unlink(oldImagePath);
                }
                catch (error) {
                    console.error(`Impossible de supprimer l'ancienne image : ${about.imageUrl}`, error);
                }
            }
        }
        const updated = await this.prisma.about.update({
            where: { id },
            data: updateData,
        });
        return {
            ...updated,
            paragraphs: JSON.parse(updated.paragraphs),
            stats: JSON.parse(updated.stats),
        };
    }
    async remove(id) {
        const about = await this.prisma.about.findUnique({ where: { id } });
        if (!about)
            throw new common_1.NotFoundException('About not found');
        return this.prisma.about.delete({ where: { id } });
    }
};
exports.AboutService = AboutService;
exports.AboutService = AboutService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        sharp_service_1.SharpService])
], AboutService);
//# sourceMappingURL=about.service.js.map