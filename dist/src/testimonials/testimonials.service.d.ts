import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonialDto, UpdateTestimonialDto } from '../../libs/dto/testimonial.dto';
import { SearchDto } from '../../libs/global/search.dto';
import { SharpService } from '../../libs/sharp/sharp.service';
export declare class TestimonialsService {
    private prisma;
    private sharpService;
    constructor(prisma: PrismaService, sharpService: SharpService);
    create(createTestimonialDto: CreateTestimonialDto, file?: Express.Multer.File): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        id: number;
        avatar: string;
    }>;
    findAll(searchDto?: SearchDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        id: number;
        avatar: string;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        id: number;
        avatar: string;
    }>;
    update(id: number, updateTestimonialDto: UpdateTestimonialDto, file?: Express.Multer.File): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        id: number;
        avatar: string;
    }>;
    remove(id: number): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        id: number;
        avatar: string;
    }>;
}
