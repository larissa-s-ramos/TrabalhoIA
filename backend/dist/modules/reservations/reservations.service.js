"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsService = void 0;
const common_1 = require("@nestjs/common");
const mock_data_1 = require("../../database/mock-data");
let ReservationsService = class ReservationsService {
    findAll(user) {
        if (user.tipo === 'ADMIN')
            return mock_data_1.reservas;
        return mock_data_1.reservas.filter(r => r.usuarioId === user.id);
    }
    findById(id, user) {
        const reserva = mock_data_1.reservas.find(r => r.id === id);
        if (!reserva)
            return null;
        if (user.tipo !== 'ADMIN' && reserva.usuarioId !== user.id)
            throw new common_1.ForbiddenException();
        return reserva;
    }
};
exports.ReservationsService = ReservationsService;
exports.ReservationsService = ReservationsService = __decorate([
    (0, common_1.Injectable)()
], ReservationsService);
//# sourceMappingURL=reservations.service.js.map