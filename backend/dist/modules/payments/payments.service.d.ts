export declare class PaymentsService {
    findByReserva(reservaId: number): {
        id: number;
        reservaId: number;
        status: string;
        valor: number;
        metodo: string;
        criadoEm: string;
    } | undefined;
    webhook(reservaId: number, status: string): {
        id: number;
        reservaId: number;
        status: string;
        valor: number;
        metodo: string;
        criadoEm: string;
    };
}
