import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto, UpdateContactDto } from '../../libs/dto/contact.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class ContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContactDto: CreateContactDto): Promise<{
        name: string;
        status: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string | null;
        interest: string | null;
        budget: string | null;
        country: string | null;
        message: string;
        id: number;
    }>;
    findAll(searchDto?: SearchDto): Promise<{
        name: string;
        status: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string | null;
        interest: string | null;
        budget: string | null;
        country: string | null;
        message: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        status: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string | null;
        interest: string | null;
        budget: string | null;
        country: string | null;
        message: string;
        id: number;
    }>;
    update(id: number, updateContactDto: UpdateContactDto): Promise<{
        name: string;
        status: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string | null;
        interest: string | null;
        budget: string | null;
        country: string | null;
        message: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        status: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string | null;
        interest: string | null;
        budget: string | null;
        country: string | null;
        message: string;
        id: number;
    }>;
    findByEmail(email: string): Promise<{
        name: string;
        status: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string | null;
        interest: string | null;
        budget: string | null;
        country: string | null;
        message: string;
        id: number;
    }[]>;
    findByInterest(interest: string): Promise<{
        name: string;
        status: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string | null;
        interest: string | null;
        budget: string | null;
        country: string | null;
        message: string;
        id: number;
    }[]>;
    findByStatus(status: string): Promise<{
        name: string;
        status: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        phone: string | null;
        interest: string | null;
        budget: string | null;
        country: string | null;
        message: string;
        id: number;
    }[]>;
    getContactStats(): Promise<{
        total: number;
        new: number;
        processed: number;
    }>;
}
