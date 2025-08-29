import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string | null;
        lastName: string | null;
        role: import(".prisma/client").$Enums.Role;
        id: number;
        lastLogin: Date | null;
    }>;
    findAll(): Promise<{
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string | null;
        lastName: string | null;
        role: import(".prisma/client").$Enums.Role;
        id: number;
        lastLogin: Date | null;
    }[]>;
    findOne(id: number): Promise<{
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string | null;
        lastName: string | null;
        role: import(".prisma/client").$Enums.Role;
        id: number;
        lastLogin: Date | null;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string | null;
        lastName: string | null;
        role: import(".prisma/client").$Enums.Role;
        id: number;
        lastLogin: Date | null;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    toggleActive(id: number): Promise<{
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string | null;
        lastName: string | null;
        role: import(".prisma/client").$Enums.Role;
        id: number;
        lastLogin: Date | null;
    }>;
}
