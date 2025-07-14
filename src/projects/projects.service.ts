import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto, UpdateProjectDto } from '../../libs/dto/project.dto';
import { SearchDto } from '../../libs/global/search.dto';
import { SharpService } from '../../libs/sharp/sharp.service';
import { promises as fs } from 'fs';
import { sharpConfig } from '../../libs/sharp/sharp.config';

@Injectable()
export class ProjectsService {
  constructor(
    private prisma: PrismaService,
    private sharpService: SharpService,
  ) {}

  async create(createProjectDto: CreateProjectDto, file?: Express.Multer.File) {
    try {
      const dataToCreate: any = {
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

    } catch (error) {
      throw new BadRequestException('Erreur lors de la création du projet');
    }
  }

  async findAll(searchDto?: SearchDto) {
    const {
      q,
      order_by = 'createdAt',
      order_dir = 'desc',
      limit,
      offset,
    } = searchDto || {};

    const where: any = {};

    if (q) {
      where.OR = [
        { title: { contains: q } },
        { description: { contains: q } },
      ];
    }

    const orderBy: any = {};
    if (order_by === 'title') {
      orderBy.title = order_dir;
    } else {
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
    } catch (error) {
      throw new BadRequestException('Erreur lors de la récupération des projets');
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
    } catch (error) {
      throw new BadRequestException('Erreur lors de la récupération des projets actifs');
    }
  }

  async findOne(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      const project = await this.prisma.project.findUnique({
        where: { id },
      });

      if (!project) {
        throw new NotFoundException(`Projet avec l'ID ${id} non trouvé`);
      }

      return {
        ...project,
        technologies: project.technologies ? JSON.parse(project.technologies) : [],
        tags: project.tags ? JSON.parse(project.tags) : [],
      };
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Erreur lors de la récupération du projet');
    }
  }

  async update(id: number, updateProjectDto: UpdateProjectDto, file?: Express.Multer.File) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    const project = await this.findOne(id);

    try {
      const updateData: any = { ...updateProjectDto, updatedAt: new Date() };
      
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
            const oldImagePath = sharpConfig.getOutputPath(project.image);
            await fs.unlink(oldImagePath);
          } catch(e) {
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
    } catch (error) {
      throw new BadRequestException('Erreur lors de la mise à jour du projet');
    }
  }

  async remove(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      return await this.prisma.project.delete({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException('Erreur lors de la suppression du projet');
    }
  }

  async toggleActive(id: number) {
    if (!id || isNaN(id)) {
      throw new BadRequestException('ID invalide');
    }

    try {
      const project = await this.prisma.project.findUnique({
        where: { id },
      });

      if (!project) {
        throw new NotFoundException(`Projet avec l'ID ${id} non trouvé`);
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
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Erreur lors de la mise à jour du statut actif du projet');
    }
  }

  async findByTechnology(technology: string) {
    if (!technology || typeof technology !== 'string') {
      throw new BadRequestException('Technologie invalide');
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
    } catch (error) {
      throw new BadRequestException('Erreur lors de la recherche par technologie');
    }
  }
}
