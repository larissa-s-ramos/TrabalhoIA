export declare class AuthService {
    validateUser(email: string, senha: string): Promise<{
        id: number;
        nome: string;
        email: string;
        tipo: string;
    }>;
    login(email: string, senha: string): Promise<{
        token: string;
        user: {
            id: number;
            nome: string;
            email: string;
            tipo: string;
        };
    }>;
}
