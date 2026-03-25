"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagamentos = exports.reservas = exports.viagens = exports.destinos = exports.users = void 0;
const bcrypt = require("bcryptjs");
exports.users = [
    {
        id: 1,
        nome: 'Cliente Teste',
        email: 'cliente@teste.com',
        senha: bcrypt.hashSync('senha123', 8),
        tipo: 'CLIENTE',
    },
    {
        id: 2,
        nome: 'Admin Teste',
        email: 'admin@teste.com',
        senha: bcrypt.hashSync('senha123', 8),
        tipo: 'ADMIN',
    },
];
exports.destinos = [
    { id: 1, nome: 'Rio de Janeiro' },
    { id: 2, nome: 'Paris' },
    { id: 3, nome: 'Nova York' },
    { id: 4, nome: 'Tóquio' },
    { id: 5, nome: 'Lisboa' },
];
exports.viagens = [
    { id: 1, tipo: 'VOO', destinoId: 1, preco: 1200, data: '2026-03-10', vagas: 5 },
    { id: 2, tipo: 'HOTEL', destinoId: 1, preco: 800, data: '2026-03-10', vagas: 3 },
    { id: 3, tipo: 'PACOTE', destinoId: 2, preco: 3500, data: '2026-04-15', vagas: 2 },
    { id: 4, tipo: 'VOO', destinoId: 2, preco: 2000, data: '2026-04-15', vagas: 4 },
    { id: 5, tipo: 'HOTEL', destinoId: 3, preco: 950, data: '2026-05-20', vagas: 6 },
    { id: 6, tipo: 'PACOTE', destinoId: 3, preco: 4000, data: '2026-05-20', vagas: 1 },
    { id: 7, tipo: 'VOO', destinoId: 4, preco: 2500, data: '2026-06-05', vagas: 2 },
    { id: 8, tipo: 'HOTEL', destinoId: 4, preco: 1100, data: '2026-06-05', vagas: 5 },
    { id: 9, tipo: 'PACOTE', destinoId: 5, preco: 3200, data: '2026-07-12', vagas: 3 },
    { id: 10, tipo: 'VOO', destinoId: 5, preco: 1800, data: '2026-07-12', vagas: 2 },
];
exports.reservas = [
    {
        id: 1,
        usuarioId: 1,
        status: 'PENDENTE',
        itens: [{ viagemId: 1, quantidade: 1 }],
        pagamentoId: 1,
    },
    {
        id: 2,
        usuarioId: 1,
        status: 'CONFIRMADA',
        itens: [{ viagemId: 3, quantidade: 2 }],
        pagamentoId: 2,
    },
    {
        id: 3,
        usuarioId: 1,
        status: 'CANCELADA',
        itens: [{ viagemId: 5, quantidade: 1 }],
        pagamentoId: null,
    },
];
exports.pagamentos = [
    {
        id: 1,
        reservaId: 1,
        status: 'PENDENTE',
        valor: 1200,
        metodo: 'CARTAO',
        criadoEm: '2026-02-24T10:00:00Z',
    },
    {
        id: 2,
        reservaId: 2,
        status: 'CONFIRMADO',
        valor: 7000,
        metodo: 'CARTAO',
        criadoEm: '2026-02-20T15:00:00Z',
    },
];
//# sourceMappingURL=mock-data.js.map