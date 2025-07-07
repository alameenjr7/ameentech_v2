export declare class CreateServiceDto {
    title: string;
    description: string;
    icon?: string;
    isActive?: boolean;
    order?: number;
    isNew?: boolean;
    isFeatured?: boolean;
    slug?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateServiceDto_base: import("@nestjs/common").Type<Partial<CreateServiceDto>>;
export declare class UpdateServiceDto extends UpdateServiceDto_base {
}
export {};
