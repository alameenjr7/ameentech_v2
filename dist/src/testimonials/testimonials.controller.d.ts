import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto, UpdateTestimonialDto } from '../../libs/dto/testimonial.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class TestimonialsController {
    private readonly testimonialsService;
    constructor(testimonialsService: TestimonialsService);
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
    findAll(searchDto: SearchDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        avatar: string;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        avatar: string;
        id: number;
    }>;
    update(id: string, updateTestimonialDto: UpdateTestimonialDto): Promise<{
        name: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        rating: import("@prisma/client/runtime/library").Decimal;
        text: string;
        avatar: string;
        id: number;
    }>;
    remove(id: string): Promise<{
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
