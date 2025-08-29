import { AuthService } from './auth.service';
import { LoginDto, ChangePasswordDto, UpdateProfileDto } from '../../libs/dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    getProfile(req: any): any;
    changePassword(req: any, changePasswordDto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    updateProfile(req: any, updateProfileDto: UpdateProfileDto): Promise<{
        isActive: boolean;
        email: string;
        firstName: string | null;
        lastName: string | null;
        role: import(".prisma/client").$Enums.Role;
        id: number;
    }>;
}
