export declare class LoginDto {
    email: string;
    password: string;
}
export declare class RegisterDto {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}
export declare class UpdateProfileDto {
    firstName?: string;
    lastName?: string;
    email?: string;
}
