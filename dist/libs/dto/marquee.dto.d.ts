export declare class CreateMarqueeDto {
    items: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateMarqueeDto_base: import("@nestjs/common").Type<Partial<CreateMarqueeDto>>;
export declare class UpdateMarqueeDto extends UpdateMarqueeDto_base {
}
export {};
