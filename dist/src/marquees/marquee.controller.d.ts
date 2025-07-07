import { SearchDto } from '../../libs/global/search.dto';
import { MarqueesService } from './marquee.service';
import { CreateMarqueeDto, UpdateMarqueeDto } from 'libs/dto/marquee.dto';
export declare class MarqueesController {
    private readonly marqueesService;
    constructor(marqueesService: MarqueesService);
    create(createMarqueeDto: CreateMarqueeDto): Promise<{
        items: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findAll(searchDto: SearchDto): Promise<{
        items: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        items: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    update(id: string, updateMarqueeDto: UpdateMarqueeDto): Promise<{
        items: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    remove(id: string): Promise<{
        items: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
}
