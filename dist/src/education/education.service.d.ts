import { PrismaService } from '../prisma/prisma.service';
import { CreateEducationDto, UpdateEducationDto } from '../../libs/dto/education.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class EducationService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createEducationDto: CreateEducationDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        institution: string;
        degree: string;
        id: number;
    }>;
    findAll(searchDto?: SearchDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        institution: string;
        degree: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        institution: string;
        degree: string;
        id: number;
    }>;
    update(id: number, updateEducationDto: UpdateEducationDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        institution: string;
        degree: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        period: string;
        institution: string;
        degree: string;
        id: number;
    }>;
}
