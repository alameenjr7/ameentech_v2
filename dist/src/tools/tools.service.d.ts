import { PrismaService } from '../prisma/prisma.service';
import { CreateToolDto, UpdateToolDto } from '../../libs/dto/tool.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class ToolsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createToolDto: CreateToolDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        percent: import("@prisma/client/runtime/library").Decimal;
        id: number;
    }>;
    findAll(searchDto?: SearchDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        percent: import("@prisma/client/runtime/library").Decimal;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        percent: import("@prisma/client/runtime/library").Decimal;
        id: number;
    }>;
    update(id: number, updateToolDto: UpdateToolDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        percent: import("@prisma/client/runtime/library").Decimal;
        id: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        percent: import("@prisma/client/runtime/library").Decimal;
        id: number;
    }>;
}
