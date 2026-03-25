export type Usuario = {
  id: number;
  nome: string;
  email: string;
  tipo: 'CLIENTE' | 'ADMIN';
};

export type Destino = {
  id: number;
  nome: string;
};

export type Viagem = {
  id: number;
  tipo: 'VOO' | 'HOTEL' | 'PACOTE';
  destinoId: number;
  preco: number;
  data: string;
  vagas: number;
  destino?: Destino;
};

export type Reserva = {
  id: number;
  usuarioId: number;
  status: 'PENDENTE' | 'CONFIRMADA' | 'CANCELADA';
  itens: { viagemId: number; quantidade: number }[];
  pagamentoId: number | null;
};

export type Pagamento = {
  id: number;
  reservaId: number;
  status: 'PENDENTE' | 'CONFIRMADO' | 'CANCELADO';
  valor: number;
  metodo: string;
  criadoEm: string;
};
