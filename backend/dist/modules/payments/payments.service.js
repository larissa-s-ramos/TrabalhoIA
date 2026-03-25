"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const mock_data_1 = require("../../database/mock-data");
let PaymentsService = class PaymentsService {
    findByReserva(reservaId) {
        return mock_data_1.pagamentos.find(p => p.reservaId === reservaId);
    }
    webhook(reservaId, status) {
        const pagamento = mock_data_1.pagamentos.find(p => p.reservaId === reservaId);
        if (!pagamento)
            throw new common_1.NotFoundException('Pagamento não encontrado');
        pagamento.status = status;
        const reserva = mock_data_1.reservas.find(r => r.id === reservaId);
        if (reserva && status === 'CONFIRMADO')
            reserva.status = 'CONFIRMADA';
        if (reserva && status === 'CANCELADO')
            reserva.status = 'CANCELADA';
        console.log(`[EMAIL] Status da reserva ${reservaId} atualizado para ${reserva === null || reserva === void 0 ? void 0 : reserva.status}`);
        return pagamento;
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)()
], PaymentsService);
//# sourceMappingURL=payments.service.js.map