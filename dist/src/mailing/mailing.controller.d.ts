import { MailingService } from './mailing.service';
import { SearchDto } from 'libs/global/search.dto';
import { CreateMailingDto, UpdateMailingDto } from 'libs/dto/mailing.dto';
export declare class MailingController {
    private readonly mailingService;
    constructor(mailingService: MailingService);
    create(createMailingDto: CreateMailingDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        email: string;
        id: number;
    }>;
    findAll(searchDto: SearchDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        email: string;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        email: string;
        id: number;
    }>;
    update(id: string, updateMailingDto: UpdateMailingDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        email: string;
        id: number;
    }>;
    remove(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        email: string;
        id: number;
    }>;
}
