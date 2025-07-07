export declare class CreateTestimonialDto {
    name: string;
    role: string;
    rating: number;
    text: string;
    avatar: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateTestimonialDto_base: import("@nestjs/common").Type<Partial<CreateTestimonialDto>>;
export declare class UpdateTestimonialDto extends UpdateTestimonialDto_base {
}
export {};
