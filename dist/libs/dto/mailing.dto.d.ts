export declare class CreateMailingDto {
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateMailingDto_base: import("@nestjs/common").Type<Partial<CreateMailingDto>>;
export declare class UpdateMailingDto extends UpdateMailingDto_base {
}
export {};
