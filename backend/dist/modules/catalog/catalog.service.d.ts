export declare class CatalogService {
    findAll({ destinoId, data, precoMax }: any): {
        destino: {
            id: number;
            nome: string;
        } | undefined;
        id: number;
        tipo: string;
        destinoId: number;
        preco: number;
        data: string;
        vagas: number;
    }[];
    findById(id: number): {
        destino: {
            id: number;
            nome: string;
        } | undefined;
        id: number;
        tipo: string;
        destinoId: number;
        preco: number;
        data: string;
        vagas: number;
    } | null;
    listDestinos(): {
        id: number;
        nome: string;
    }[];
}
