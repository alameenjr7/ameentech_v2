export declare class CreateContactDto {
    name: string;
    email: string;
    phone?: string;
    interest?: string;
    budget?: string;
    country?: string;
    message: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateContactDto_base: import("@nestjs/common").Type<Partial<CreateContactDto>>;
export declare class UpdateContactDto extends UpdateContactDto_base {
}
export {};
