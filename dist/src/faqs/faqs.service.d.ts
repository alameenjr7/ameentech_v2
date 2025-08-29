import { PrismaService } from '../prisma/prisma.service';
import { CreateFaqDto, UpdateFaqDto } from '../../libs/dto/faq.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class FaqsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFaqDto: CreateFaqDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        question: string;
        answer: string | null;
        order: number;
        id: number;
    }>;
    findAll(searchDto?: SearchDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        question: string;
        answer: string | null;
        order: number;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        question: string;
        answer: string | null;
        order: number;
        id: number;
    }>;
    update(id: number, updateFaqDto: UpdateFaqDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        question: string;
        answer: string | null;
        order: number;
        id: number;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        question: string;
        answer: string | null;
        order: number;
        id: number;
    }>;
}
