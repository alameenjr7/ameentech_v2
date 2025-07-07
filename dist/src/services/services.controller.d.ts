import { ServicesService } from './services.service';
import { CreateServiceDto } from '../../libs/dto/service.dto';
import { UpdateServiceDto } from '../../libs/dto/service.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(createServiceDto: CreateServiceDto): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        icon: string | null;
        order: number;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }>;
    findAll(searchDto: SearchDto): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        icon: string | null;
        order: number;
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
        icon: string | null;
        order: number;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        icon: string | null;
        order: number;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }>;
    update(id: string, updateServiceDto: UpdateServiceDto): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        icon: string | null;
        order: number;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }>;
    toggleActive(id: string): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        icon: string | null;
        order: number;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }>;
    remove(id: string): Promise<{
        description: string;
        title: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        icon: string | null;
        order: number;
        isNew: boolean;
        isFeatured: boolean;
        slug: string | null;
        id: number;
    }>;
}
