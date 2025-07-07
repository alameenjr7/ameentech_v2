import { AboutService } from './about.service';
import { AboutDto, UpdateAboutDto } from '../../libs/dto/about.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class AboutController {
    private readonly aboutService;
    constructor(aboutService: AboutService);
    create(createAboutDto: AboutDto): Promise<{
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
    findAll(searchDto: SearchDto): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateAboutDto: UpdateAboutDto): Promise<{
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
    remove(id: string): Promise<{
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
