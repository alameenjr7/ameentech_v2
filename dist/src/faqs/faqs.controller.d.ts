import { FaqsService } from './faqs.service';
import { CreateFaqDto, UpdateFaqDto } from '../../libs/dto/faq.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class FaqsController {
    private readonly faqsService;
    constructor(faqsService: FaqsService);
    create(createFaqDto: CreateFaqDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        question: string;
        answer: string | null;
        id: number;
    }>;
    findAll(searchDto: SearchDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        question: string;
        answer: string | null;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        question: string;
        answer: string | null;
        id: number;
    }>;
    update(id: string, updateFaqDto: UpdateFaqDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        question: string;
        answer: string | null;
        id: number;
    }>;
    remove(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        question: string;
        answer: string | null;
        id: number;
    }>;
}
