export declare class CreateEducationDto {
    period: string;
    institution: string;
    degree: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateEducationDto_base: import("@nestjs/common").Type<Partial<CreateEducationDto>>;
export declare class UpdateEducationDto extends UpdateEducationDto_base {
}
export {};
