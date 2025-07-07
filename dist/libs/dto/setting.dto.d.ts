export declare class CreateSettingDto {
    title: string;
    phone: string;
    email: string;
    address: string;
    meta_description?: string;
    meta_keywords?: string;
    meta_image?: string;
    slogan?: string;
    logo?: string;
    logo_2?: string;
    favicon?: string;
    isActive?: boolean;
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
    createdAt?: Date;
    updatedAt?: Date;
    timezone?: string;
}
declare const UpdateSettingDto_base: import("@nestjs/common").Type<Partial<CreateSettingDto>>;
export declare class UpdateSettingDto extends UpdateSettingDto_base {
}
export {};
