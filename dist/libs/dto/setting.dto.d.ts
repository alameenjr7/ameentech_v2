export declare class CreateSettingDto {
    title: string;
    phone: string;
    email: string;
    address: string;
    meta_description?: string;
    meta_keywords?: string;
    slogan?: string;
    color?: string;
    color_2?: string;
    color_3?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    whatsapp?: string;
    telegram?: string;
    youtube?: string;
    tiktok?: string;
    domain?: string;
    createdAt?: Date;
    updatedAt?: Date;
    timezone?: string;
    isActive?: boolean;
}
declare const UpdateSettingDto_base: import("@nestjs/common").Type<Partial<CreateSettingDto>>;
export declare class UpdateSettingDto extends UpdateSettingDto_base {
}
export {};
