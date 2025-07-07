export declare class AboutDto {
    title: string;
    description: string;
    imageUrl?: string;
    paragraphs: string;
    stats: string;
    isActive?: boolean;
    version?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateAboutDto_base: import("@nestjs/common").Type<Partial<AboutDto>>;
export declare class UpdateAboutDto extends UpdateAboutDto_base {
}
export {};
