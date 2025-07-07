export declare class CreateToolDto {
    name: string;
    percent: number;
    icon: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const UpdateToolDto_base: import("@nestjs/common").Type<Partial<CreateToolDto>>;
export declare class UpdateToolDto extends UpdateToolDto_base {
}
export {};
