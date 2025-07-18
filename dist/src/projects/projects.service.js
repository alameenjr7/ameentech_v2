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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const sharp_service_1 = require("../../libs/sharp/sharp.service");
const fs_1 = require("fs");
const sharp_config_1 = require("../../libs/sharp/sharp.config");
let ProjectsService = class ProjectsService {
    constructor(prisma, sharpService) {
        this.prisma = prisma;
        this.sharpService = sharpService;
    }
    async create(createProjectDto, file) {
        try {
            const dataToCreate = {
                ...createProjectDto,
                technologies: JSON.stringify(createProjectDto.technologies),
                tags: JSON.stringify(createProjectDto.tags),
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            if (file && file.buffer) {
                dataToCreate.image = await this.sharpService.resizeImage(file.buffer, file.originalname);
            }
            const newProject = await this.prisma.project.create({ data: dataToCreate });
            return {
                ...newProject,
                technologies: newProject.technologies ? JSON.parse(newProject.technologies) : [],
                tags: newProject.tags ? JSON.parse(newProject.tags) : [],
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la création du projet');
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
            const projects = await this.prisma.project.findMany({
                where,
                orderBy,
                take: limit,
                skip: offset,
            });
            return projects.map(project => ({
                ...project,
                technologies: project.technologies ? JSON.parse(project.technologies) : [],
                tags: project.tags ? JSON.parse(project.tags) : [],
            }));
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la récupération des projets');
        }
    }
    async findActive() {
        try {
            const projects = await this.prisma.project.findMany({
                where: { isActive: true },
                orderBy: [
                    { order: 'asc' },
                    { createdAt: 'desc' },
                ],
            });
            return projects.map(project => ({
                ...project,
                technologies: project.technologies ? JSON.parse(project.technologies) : [],
                tags: project.tags ? JSON.parse(project.tags) : [],
            }));
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la récupération des projets actifs');
        }
    }
    async findOne(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        try {
            const project = await this.prisma.project.findUnique({
                where: { id },
            });
            if (!project) {
                throw new common_1.NotFoundException(`Projet avec l'ID ${id} non trouvé`);
            }
            return {
                ...project,
                technologies: project.technologies ? JSON.parse(project.technologies) : [],
                tags: project.tags ? JSON.parse(project.tags) : [],
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Erreur lors de la récupération du projet');
        }
    }
    async update(id, updateProjectDto, file) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        const project = await this.findOne(id);
        try {
            const updateData = { ...updateProjectDto, updatedAt: new Date() };
            if (updateProjectDto.technologies) {
                updateData.technologies = JSON.stringify(updateProjectDto.technologies);
            }
            if (updateProjectDto.tags) {
                updateData.tags = JSON.stringify(updateProjectDto.tags);
            }
            if (file && file.buffer) {
                updateData.image = await this.sharpService.resizeImage(file.buffer, file.originalname);
                if (project.image) {
                    try {
                        const oldImagePath = sharp_config_1.sharpConfig.getOutputPath(project.image);
                        await fs_1.promises.unlink(oldImagePath);
                    }
                    catch (e) {
                        console.error(`Impossible de supprimer l'ancienne image: ${project.image}`, e);
                    }
                }
            }
            const updatedProject = await this.prisma.project.update({
                where: { id },
                data: updateData,
            });
            return {
                ...updatedProject,
                technologies: updatedProject.technologies ? JSON.parse(updatedProject.technologies) : [],
                tags: updatedProject.tags ? JSON.parse(updatedProject.tags) : [],
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la mise à jour du projet');
        }
    }
    async remove(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        try {
            return await this.prisma.project.delete({
                where: { id },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la suppression du projet');
        }
    }
    async toggleActive(id) {
        if (!id || isNaN(id)) {
            throw new common_1.BadRequestException('ID invalide');
        }
        try {
            const project = await this.prisma.project.findUnique({
                where: { id },
            });
            if (!project) {
                throw new common_1.NotFoundException(`Projet avec l'ID ${id} non trouvé`);
            }
            const updatedProject = await this.prisma.project.update({
                where: { id },
                data: { isActive: !project.isActive },
            });
            return {
                ...updatedProject,
                technologies: updatedProject.technologies ? JSON.parse(updatedProject.technologies) : [],
                tags: updatedProject.tags ? JSON.parse(updatedProject.tags) : [],
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException('Erreur lors de la mise à jour du statut actif du projet');
        }
    }
    async findByTechnology(technology) {
        if (!technology || typeof technology !== 'string') {
            throw new common_1.BadRequestException('Technologie invalide');
        }
        try {
            const projects = await this.prisma.project.findMany({
                where: {
                    technologies: {
                        contains: technology,
                    },
                    isActive: true,
                },
                orderBy: [
                    { order: 'asc' },
                    { createdAt: 'desc' },
                ],
            });
            return projects.map(project => ({
                ...project,
                technologies: project.technologies ? JSON.parse(project.technologies) : [],
                tags: project.tags ? JSON.parse(project.tags) : [],
            }));
        }
        catch (error) {
            throw new common_1.BadRequestException('Erreur lors de la recherche par technologie');
        }
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        sharp_service_1.SharpService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map