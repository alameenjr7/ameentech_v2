export declare class CreateBlogDto {
    category: string;
    date: string;
    title: string;
    excerpt: string;
    link: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateBlogDto_base: import("@nestjs/common").Type<Partial<CreateBlogDto>>;
export declare class UpdateBlogDto extends UpdateBlogDto_base {
}
export {};
