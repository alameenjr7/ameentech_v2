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
exports.BlogsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const sharp_service_1 = require("../../libs/sharp/sharp.service");
const fs_1 = require("fs");
const sharp_config_1 = require("../../libs/sharp/sharp.config");
let BlogsService = class BlogsService {
    constructor(prisma, sharpService) {
        this.prisma = prisma;
        this.sharpService = sharpService;
    }
    async create(createBlogDto, file) {
        try {
            let imageFilename = null;
            if (file && file.buffer) {
                imageFilename = await this.sharpService.resizeImage(file.buffer, file.originalname);
            }
            return await this.prisma.blogs.create({
                data: {
                    ...createBlogDto,
                    image: imageFilename || '',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            });
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException('Erreur lors de la création du blog');
        }
    }
    async findAll(searchDto) {
        const { q, order_by = 'createdAt', order_dir = 'desc', limit, offset, } = searchDto || {};
        const where = {};
        if (q) {
            where.OR = [
                { title: { contains: q } },
                { category: { contains: q } },
                { excerpt: { contains: q } },
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
            return await this.prisma.blogs.findMany({
                where,
                orderBy,
                take: limit,
                skip: offset,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error retrieving blog posts');
        }
    }
    async findOne(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('Invalid ID');
        }
        try {
            const blog = await this.prisma.blogs.findUnique({
                where: { id },
            });
            if (!blog) {
                throw new common_1.NotFoundException(`Blog post with ID ${id} not found`);
            }
            return blog;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException ||
                error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Error retrieving blog post');
        }
    }
    async update(id, updateBlogDto, file) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('Invalid ID');
        }
        const blogPost = await this.findOne(id);
        const dataToUpdate = { ...updateBlogDto, updatedAt: new Date() };
        if (file && file.buffer) {
            dataToUpdate.image = await this.sharpService.resizeImage(file.buffer, file.originalname);
            if (blogPost.image) {
                try {
                    const oldImagePath = sharp_config_1.sharpConfig.getOutputPath(blogPost.image);
                    await fs_1.promises.unlink(oldImagePath);
                }
                catch (error) {
                    console.error(`Impossible de supprimer l'ancienne image : ${blogPost.image}`, error);
                }
            }
        }
        try {
            return await this.prisma.blogs.update({
                where: { id },
                data: dataToUpdate,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error updating blog post');
        }
    }
    async remove(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('Invalid ID');
        }
        await this.findOne(id);
        try {
            return await this.prisma.blogs.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Error deleting blog post');
        }
    }
};
exports.BlogsService = BlogsService;
exports.BlogsService = BlogsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        sharp_service_1.SharpService])
], BlogsService);
//# sourceMappingURL=blogs.service.js.map