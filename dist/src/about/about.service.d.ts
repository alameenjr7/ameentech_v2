import { PrismaService } from '../prisma/prisma.service';
import { AboutDto, UpdateAboutDto } from '../../libs/dto/about.dto';
export declare class AboutService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: AboutDto): Promise<{
        paragraphs: any;
        stats: any;
        version: number;
        description: string;
        title: string;
        imageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(searchDto: import('../../libs/global/search.dto').SearchDto): Promise<{
        paragraphs: any;
        stats: any;
        version: number;
        description: string;
        title: string;
        imageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        paragraphs: any;
        stats: any;
        version: number;
        description: string;
        title: string;
        imageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: number, data: UpdateAboutDto): Promise<{
        paragraphs: any;
        stats: any;
        version: number;
        description: string;
        title: string;
        imageUrl: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        version: number;
        description: string;
        title: string;
        imageUrl: string | null;
        paragraphs: string;
        stats: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
