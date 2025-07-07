import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkExperienceDto, UpdateWorkExperienceDto } from '../../libs/dto/work-experience.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class WorkExperiencesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createWorkExperienceDto: CreateWorkExperienceDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        role: string;
        company: string;
        id: number;
    }>;
    findAll(searchDto?: SearchDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        role: string;
        company: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        role: string;
        company: string;
        id: number;
    }>;
    update(id: number, updateWorkExperienceDto: UpdateWorkExperienceDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        role: string;
        company: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        role: string;
        company: string;
        id: number;
    }>;
}
