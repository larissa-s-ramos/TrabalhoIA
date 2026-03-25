import { ReservationsService } from './reservations.service';
export declare class ReservationsController {
    private readonly service;
    constructor(service: ReservationsService);
    findAll(req: any): ({
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
    findById(id: string, req: any): {
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
