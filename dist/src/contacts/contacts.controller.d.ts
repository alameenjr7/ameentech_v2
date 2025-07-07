import { ContactsService } from './contacts.service';
import { CreateContactDto } from '../../libs/dto/contact.dto';
import { UpdateContactDto } from '../../libs/dto/contact.dto';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
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
    findAll(query: any): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateContactDto: UpdateContactDto): Promise<{
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
    remove(id: string): Promise<{
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
}
