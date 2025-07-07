export declare class CreateWorkExperienceDto {
    period: string;
    company: string;
    role: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateWorkExperienceDto_base: import("@nestjs/common").Type<Partial<CreateWorkExperienceDto>>;
export declare class UpdateWorkExperienceDto extends UpdateWorkExperienceDto_base {
}
export {};
