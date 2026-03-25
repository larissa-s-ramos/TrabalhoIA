export declare class ReservationsService {
    findAll(user: any): ({
        id: number;
        usuarioId: number;
        status: string;
        itens: {
            viagemId: number;
            quantidade: number;
        }[];
        pagamentoId: number;
    } | {
        id: number;
        usuarioId: number;
        status: string;
        itens: {
            viagemId: number;
            quantidade: number;
        }[];
        pagamentoId: null;
    })[];
    findById(id: number, user: any): {
        id: number;
        usuarioId: number;
        status: string;
        itens: {
            viagemId: number;
            quantidade: number;
        }[];
        pagamentoId: number;
    } | {
        id: number;
        usuarioId: number;
        status: string;
        itens: {
            viagemId: number;
            quantidade: number;
        }[];
        pagamentoId: null;
    } | null;
}
