import { PricingPlansService } from './pricing-plans.service';
import { CreatePricingPlanDto, UpdatePricingPlanDto } from '../../libs/dto/pricing-plan.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class PricingPlansController {
    private readonly pricingPlansService;
    constructor(pricingPlansService: PricingPlansService);
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
    findAll(searchDto: SearchDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client/runtime/library").Decimal;
        features: string;
        icon: string;
        popular: boolean;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client/runtime/library").Decimal;
        features: string;
        icon: string;
        popular: boolean;
        id: number;
    }>;
    update(id: string, updatePricingPlanDto: UpdatePricingPlanDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client/runtime/library").Decimal;
        features: string;
        icon: string;
        popular: boolean;
        id: number;
    }>;
    remove(id: string): Promise<{
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
