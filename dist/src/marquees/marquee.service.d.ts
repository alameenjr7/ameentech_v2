import { PrismaService } from '../prisma/prisma.service';
import { SearchDto } from '../../libs/global/search.dto';
import { CreateMarqueeDto, UpdateMarqueeDto } from 'libs/dto/marquee.dto';
export declare class MarqueesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMarqueeDto: CreateMarqueeDto): Promise<{
        items: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(searchDto?: SearchDto): Promise<{
        items: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        items: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: number, updateMarqueeDto: UpdateMarqueeDto): Promise<{
        items: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: number): Promise<{
        items: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
