import { Injectable } from '@nestjs/common';
import { reservas, pagamentos } from '../../database/mock-data';

@Injectable()
export class ReportsService {
  totalVendasPorPeriodo(inicio: string, fim: string) {
    const pagos = pagamentos.filter(p => p.status === 'CONFIRMADO' && p.criadoEm >= inicio && p.criadoEm <= fim);
    return {
      total: pagos.reduce((acc, p) => acc + p.valor, 0),
      quantidade: pagos.length,
    };
  }
  listarReservas(filtros: any) {
    let result = reservas;
    if (filtros.status) result = result.filter(r => r.status === filtros.status);
    if (filtros.usuarioId) result = result.filter(r => r.usuarioId == filtros.usuarioId);
    return result;
  }
}
