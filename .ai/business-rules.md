# Regras de Negócio

## Usuários
- Tipos: **CLIENTE** e **ADMIN**
- Clientes só acessam seus próprios dados
- Admins têm acesso total

## Viagens
- Tipos: **VOO**, **HOTEL**, **PACOTE**
- Toda viagem tem vagas disponíveis
- Não é possível reservar viagem sem vagas

## Reservas
- Status: **PENDENTE** → **CONFIRMADA** → **CANCELADA**
- Uma reserva pode ter múltiplos itens (ItemReserva)
- Ao cancelar, as vagas são liberadas
- Cancelamento só é permitido se status for PENDENTE ou CONFIRMADA

## Pagamentos
- Cada reserva tem exatamente um pagamento
- Pagamento confirmado muda status da reserva para CONFIRMADA
- Webhook do gateway atualiza o status

## Notificações
- E-mail enviado ao confirmar reserva
- E-mail enviado ao cancelar reserva

## Relatórios (apenas Admin)
- Total de vendas por período
- Listagem de reservas com filtros
