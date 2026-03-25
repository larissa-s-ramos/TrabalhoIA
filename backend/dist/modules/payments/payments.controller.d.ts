import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly service;
    constructor(service: PaymentsService);
    webhook(body: {
        reservaId: number;
        status: string;
    }): {
        id: number;
        reservaId: number;
        status: string;
        valor: number;
        metodo: string;
        criadoEm: string;
    };
}
