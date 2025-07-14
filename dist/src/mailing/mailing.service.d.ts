import { CreateMailingDto, UpdateMailingDto } from 'libs/dto/mailing.dto';
import { SearchDto } from 'libs/global/search.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MailingService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createMailingDto: CreateMailingDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        email: string;
        id: number;
    }>;
    findAll(searchDto?: SearchDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        email: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        email: string;
        id: number;
    }>;
    update(id: number, updateMailingDto: UpdateMailingDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        email: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        createdAt: Date;
        updatedAt: Date;
        email: string;
        id: number;
    }>;
}
