export interface AuthenticatedRequest {
    user: {
        id: number;
        email: string;
        firstName?: string;
        lastName?: string;
        role: string;
        isActive: boolean;
    };
}
