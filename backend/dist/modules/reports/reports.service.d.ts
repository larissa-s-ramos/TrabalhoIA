export declare class ReportsService {
    totalVendasPorPeriodo(inicio: string, fim: string): {
        total: number;
        quantidade: number;
    };
    listarReservas(filtros: any): ({
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
