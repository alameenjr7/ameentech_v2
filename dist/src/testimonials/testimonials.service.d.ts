import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonialDto, UpdateTestimonialDto } from '../../libs/dto/testimonial.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class TestimonialsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTestimonialDto: CreateTestimonialDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        avatar: string;
        id: number;
    }>;
    findAll(searchDto?: SearchDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        avatar: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        avatar: string;
        id: number;
    }>;
    update(id: number, updateTestimonialDto: UpdateTestimonialDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        avatar: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        avatar: string;
        id: number;
    }>;
}
