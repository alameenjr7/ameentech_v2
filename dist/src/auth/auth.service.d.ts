import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto, UpdateProfileDto } from '../../libs/dto/auth.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        user: {
            isActive: boolean;
            createdAt: Date;
            email: string;
            firstName: string | null;
            lastName: string | null;
            role: import(".prisma/client").$Enums.Role;
            id: number;
        };
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        user: {
            id: number;
            email: string;
            firstName: string | null;
            lastName: string | null;
            role: import(".prisma/client").$Enums.Role;
            isActive: true;
            createdAt: Date;
        };
        token: string;
    }>;
    validateUser(userId: number): Promise<{
        isActive: boolean;
        email: string;
        firstName: string | null;
        lastName: string | null;
        role: import(".prisma/client").$Enums.Role;
        id: number;
    } | null>;
    private generateToken;
    changePassword(userId: number, currentPassword: string, newPassword: string): Promise<{
        message: string;
    }>;
    updateProfile(userId: number, updateProfileDto: UpdateProfileDto): Promise<{
        isActive: boolean;
        email: string;
        firstName: string | null;
        lastName: string | null;
        role: import(".prisma/client").$Enums.Role;
        id: number;
    }>;
}
