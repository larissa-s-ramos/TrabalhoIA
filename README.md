# Plataforma de Reserva de Viagens (MVP)

## Descrição
MVP de uma plataforma de reserva de viagens, executável localmente via Docker Compose, com dados mockados em memória e arquitetura orientada a serviços.

## Como executar

1. Clone o repositório
2. Execute:

```sh
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- PostgreSQL: localhost:5432 (usuário/senha: travel/travel)

## Credenciais de Teste

- **Cliente:** cliente@teste.com / senha123
- **Admin:** admin@teste.com / senha123

## Funcionalidades
- Busca, reserva, pagamento e cancelamento de viagens
- Autenticação JWT
- Área do cliente e admin
- Relatórios básicos (admin)

## Estrutura
- backend/: API NestJS (dados mockados)
- frontend/: Next.js 14 (React 18, Tailwind CSS)
- .ai/: Contexto e padrões do projeto

## Observações
- Dados de viagens, reservas e pagamentos são mockados em memória
- E-mails e pagamentos são simulados via console.log
- Banco PostgreSQL já provisionado para evolução futura

## Padrões e regras
Consulte `.ai/` para padrões de código, regras de negócio e arquitetura.
# ViajeAqui
# TrabalhoIA
