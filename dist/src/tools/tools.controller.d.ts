import { ToolsService } from './tools.service';
import { CreateToolDto, UpdateToolDto } from '../../libs/dto/tool.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class ToolsController {
    private readonly toolsService;
    constructor(toolsService: ToolsService);
    create(createToolDto: CreateToolDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        percent: import("@prisma/client/runtime/library").Decimal;
        id: number;
    }>;
    findAll(searchDto: SearchDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        percent: import("@prisma/client/runtime/library").Decimal;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        percent: import("@prisma/client/runtime/library").Decimal;
        id: number;
    }>;
    update(id: string, updateToolDto: UpdateToolDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        percent: import("@prisma/client/runtime/library").Decimal;
        id: number;
    }>;
    remove(id: string): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        percent: import("@prisma/client/runtime/library").Decimal;
        id: number;
    }>;
}
