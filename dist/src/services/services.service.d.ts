import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto, UpdateServiceDto } from '../../libs/dto/service.dto';
import { SearchDto } from 'libs/global/search.dto';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createServiceDto: CreateServiceDto): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        icon: string | null;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }>;
    findAll(searchDto?: SearchDto): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        icon: string | null;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }[]>;
    findActive(): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        icon: string | null;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        icon: string | null;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }>;
    update(id: number, updateServiceDto: UpdateServiceDto): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        icon: string | null;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }>;
    remove(id: number): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        icon: string | null;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }>;
    toggleActive(id: number): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        icon: string | null;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }>;
}
