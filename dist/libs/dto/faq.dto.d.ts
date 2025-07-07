export declare class CreateFaqDto {
    question: string;
    answer?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateFaqDto_base: import("@nestjs/common").Type<Partial<CreateFaqDto>>;
export declare class UpdateFaqDto extends UpdateFaqDto_base {
}
export {};
