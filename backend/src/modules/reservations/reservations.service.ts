import { Injectable, BadRequestException, ForbiddenException } from '@nestjs/common';
import { reservas, viagens } from '../../database/mock-data';

@Injectable()
export class ReservationsService {
  findAll(user: any) {
    if (user.tipo === 'ADMIN') return reservas;
    return reservas.filter(r => r.usuarioId === user.id);
  }
  findById(id: number, user: any) {
    const reserva = reservas.find(r => r.id === id);
    if (!reserva) return null;
    if (user.tipo !== 'ADMIN' && reserva.usuarioId !== user.id) throw new ForbiddenException();
    return reserva;
  }
  // Métodos de criar, cancelar, etc. seriam implementados aqui
}
