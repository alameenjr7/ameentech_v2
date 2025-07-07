import { PrismaService } from '../prisma/prisma.service';
import { CreatePricingPlanDto, UpdatePricingPlanDto } from '../../libs/dto/pricing-plan.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class PricingPlansService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPricingPlanDto: CreatePricingPlanDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client/runtime/library").Decimal;
        features: string;
        icon: string;
        popular: boolean;
        id: number;
    }>;
    findAll(searchDto?: SearchDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client/runtime/library").Decimal;
        features: string;
        icon: string;
        popular: boolean;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client/runtime/library").Decimal;
        features: string;
        icon: string;
        popular: boolean;
        id: number;
    }>;
    update(id: number, updatePricingPlanDto: UpdatePricingPlanDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client/runtime/library").Decimal;
        features: string;
        icon: string;
        popular: boolean;
        id: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client/runtime/library").Decimal;
        features: string;
        icon: string;
        popular: boolean;
        id: number;
    }>;
}
