export declare class CreatePricingPlanDto {
    name: string;
    price: number;
    features: string;
    icon: string;
    popular?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdatePricingPlanDto_base: import("@nestjs/common").Type<Partial<CreatePricingPlanDto>>;
export declare class UpdatePricingPlanDto extends UpdatePricingPlanDto_base {
}
export {};
