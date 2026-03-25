import { Injectable, NotFoundException } from '@nestjs/common';
import { pagamentos, reservas } from '../../database/mock-data';

@Injectable()
export class PaymentsService {
  findByReserva(reservaId: number) {
    return pagamentos.find(p => p.reservaId === reservaId);
  }
  webhook(reservaId: number, status: string) {
    const pagamento = pagamentos.find(p => p.reservaId === reservaId);
    if (!pagamento) throw new NotFoundException('Pagamento não encontrado');
    pagamento.status = status;
    const reserva = reservas.find(r => r.id === reservaId);
    if (reserva && status === 'CONFIRMADO') reserva.status = 'CONFIRMADA';
    if (reserva && status === 'CANCELADO') reserva.status = 'CANCELADA';
    // Simula envio de e-mail
    console.log(`[EMAIL] Status da reserva ${reservaId} atualizado para ${reserva?.status}`);
    return pagamento;
  }
}
