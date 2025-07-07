export declare class CreateProjectDto {
    title: string;
    description: string;
    image?: string;
    technologies?: string;
    tags?: string;
    isActive?: boolean;
    order?: number;
    clientName?: string;
    projectUrl?: string;
    serviceId?: number;
    isNew?: boolean;
    isFeatured?: boolean;
    slug?: string;
    category?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateProjectDto_base: import("@nestjs/common").Type<Partial<CreateProjectDto>>;
export declare class UpdateProjectDto extends UpdateProjectDto_base {
}
export {};
