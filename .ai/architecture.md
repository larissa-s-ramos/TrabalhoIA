# Arquitetura do Projeto

## Visão Geral

Plataforma de Reserva de Viagens baseada em arquitetura orientada a serviços, com três camadas principais:

- **Frontend:** Next.js (React)
- **Backend:** NestJS (Node.js)
- **Banco de Dados:** PostgreSQL, Redis, ElasticSearch

## Decisões Arquiteturais (ADRs)

### ADR-001: API Gateway
- Ponto único de entrada para todas as requisições
- Responsável por autenticação, roteamento e rate limiting

### ADR-002: Separação por Módulos de Domínio
- Módulos: Auth, Catálogo, Reservas, Pagamentos, Notificações, Relatórios
- Cada módulo encapsula regras e integrações do seu domínio

### ADR-003: Comunicação Assíncrona
- Uso de Message Broker (RabbitMQ) para eventos de pagamento e notificações
- MVP: eventos síncronos internos

### ADR-004: Cache com Redis
- Listagem de viagens utiliza cache Redis para performance

### ADR-005: Busca com ElasticSearch
- Catálogo de viagens indexado no ElasticSearch
- MVP: busca por filtro em memória

## Diagrama Textual da Arquitetura

```
[Usuário]
   |
[Frontend (Next.js)]
   |
[API Gateway]
   |
[Backend (NestJS)]
   |         |         |         |         |
[Auth]  [Catálogo] [Reservas] [Pagamentos] [Notificações]
   |         |         |         |         |
[PostgreSQL] [Redis] [ElasticSearch] [RabbitMQ]
```

## Fluxos Principais

### 1. Busca de Viagens
Usuário → Frontend → API Gateway → Catálogo (cache Redis/ElasticSearch) → Resposta

### 2. Reserva de Viagem
Usuário → Frontend → API Gateway → Reservas → Pagamentos (evento) → Notificações (evento)

### 3. Pagamento
Usuário → Frontend → API Gateway → Pagamentos → Webhook Gateway → Reservas (atualiza status)

### 4. Cancelamento
Usuário → Frontend → API Gateway → Reservas (libera vagas) → Notificações (evento)

### 5. Notificação
Backend → Notificações → E-mail (ou log no MVP)
