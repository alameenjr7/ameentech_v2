import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto, UpdateTestimonialDto } from '../../libs/dto/testimonial.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class TestimonialsController {
    private readonly testimonialsService;
    constructor(testimonialsService: TestimonialsService);
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
    findAll(searchDto: SearchDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        id: number;
        avatar: string;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        id: number;
        avatar: string;
    }>;
    update(id: string, updateTestimonialDto: UpdateTestimonialDto, file?: Express.Multer.File): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        id: number;
        avatar: string;
    }>;
    remove(id: string): Promise<{
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
