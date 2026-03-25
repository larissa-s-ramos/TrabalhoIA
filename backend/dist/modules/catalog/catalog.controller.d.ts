import { CatalogService } from './catalog.service';
export declare class CatalogController {
    private readonly service;
    constructor(service: CatalogService);
    findAll(query: any): {
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
    findById(id: string): {
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
