export declare const users: {
    id: number;
    nome: string;
    email: string;
    senha: string;
    tipo: string;
}[];
export declare const destinos: {
    id: number;
    nome: string;
}[];
export declare const viagens: {
    id: number;
    tipo: string;
    destinoId: number;
    preco: number;
    data: string;
    vagas: number;
}[];
export declare const reservas: ({
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
export declare const pagamentos: {
    id: number;
    reservaId: number;
    status: string;
    valor: number;
    metodo: string;
    criadoEm: string;
}[];
