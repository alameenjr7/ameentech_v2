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
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const sharp_service_1 = require("../../libs/sharp/sharp.service");
const fs_1 = require("fs");
const sharp_config_1 = require("../../libs/sharp/sharp.config");
let SettingsService = class SettingsService {
    constructor(prisma, sharpService) {
        this.prisma = prisma;
        this.sharpService = sharpService;
    }
    async create(data, files = {}) {
        try {
            const dataToCreate = { ...data, createdAt: new Date(), updatedAt: new Date() };
            const fileFields = ['logo', 'logo_2', 'favicon', 'meta_image'];
            for (const field of fileFields) {
                const file = files[field]?.[0];
                if (file) {
                    dataToCreate[field] = await this.sharpService.resizeImage(file.buffer, file.originalname);
                }
            }
            return await this.prisma.setting.create({ data: dataToCreate });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la création du paramètre');
        }
    }
    async findAll(searchDto) {
        const { q, order_by = 'createdAt', order_dir = 'desc', limit, offset, } = searchDto || {};
        const where = {};
        if (q) {
            where.OR = [
                { title: { contains: q } },
                { description: { contains: q } },
            ];
        }
        const orderBy = {};
        if (order_by === 'title') {
            orderBy.title = order_dir;
        }
        else {
            orderBy.createdAt = order_dir;
        }
        try {
            return await this.prisma.setting.findMany({
                where,
                orderBy,
                take: limit,
                skip: offset,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la récupération des paramètres');
        }
    }
    async findOne(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        try {
            const setting = await this.prisma.setting.findUnique({ where: { id } });
            if (!setting)
                throw new common_1.NotFoundException('Paramètre non trouvé');
            return setting;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Erreur lors de la récupération du paramètre');
        }
    }
    async update(id, data, files = {}) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        const setting = await this.findOne(id);
        try {
            const dataToUpdate = { ...data, updatedAt: new Date() };
            const fileFields = ['logo', 'logo_2', 'favicon', 'meta_image'];
            for (const field of fileFields) {
                const file = files[field]?.[0];
                if (file) {
                    dataToUpdate[field] = await this.sharpService.resizeImage(file.buffer, file.originalname);
                    const oldImage = setting[field];
                    if (oldImage) {
                        try {
                            await fs_1.promises.unlink(sharp_config_1.sharpConfig.getOutputPath(oldImage));
                        }
                        catch (e) {
                            console.error(`Impossible de supprimer l'ancienne image: ${oldImage}`, e);
                        }
                    }
                }
            }
            return await this.prisma.setting.update({ where: { id }, data: dataToUpdate });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la mise à jour du paramètre');
        }
    }
    async remove(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        try {
            return await this.prisma.setting.delete({ where: { id } });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la suppression du paramètre');
        }
    }
};
exports.SettingsService = SettingsService;
exports.SettingsService = SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        sharp_service_1.SharpService])
], SettingsService);
//# sourceMappingURL=settings.service.js.map