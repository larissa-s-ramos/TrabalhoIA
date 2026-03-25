import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly service;
    constructor(service: ReportsService);
    totalVendas(inicio: string, fim: string): {
        total: number;
        quantidade: number;
    };
    listarReservas(query: any): ({
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
}
