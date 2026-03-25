# Padrões e Convenções

## Convenções de Nomenclatura

- **Arquivos:** kebab-case (ex: `user-service.ts`, `booking-controller.ts`)
- **Variáveis:** camelCase (ex: `userId`, `bookingStatus`)
- **Funções:** camelCase (ex: `createBooking`, `sendEmailNotification`)
- **Classes:** PascalCase (ex: `BookingService`, `UserController`)
- **Rotas:** kebab-case, plural (ex: `/api/v1/bookings`, `/api/v1/users`)

## Estrutura de Pastas

```
root/
  ├── apps/                # Frontend e backend
  │    ├── frontend/       # Next.js (React)
  │    └── backend/        # NestJS
  ├── libs/                # Bibliotecas compartilhadas
  ├── scripts/             # Scripts utilitários
  ├── .ai/                 # Contexto de IA
  ├── .env                 # Variáveis de ambiente
  ├── docker-compose.yml   # Orquestração local
  └── README.md
```

## Commits (Conventional Commits)

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, sem alteração de código
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Tarefas de build, infra, etc.

Exemplo: `feat(booking): adicionar endpoint de criação de reserva`

## Padrão de Resposta da API

```json
{
  "data": {},
  "error": null,
  "meta": {}
}
```
- `data`: Dados da resposta
- `error`: Objeto de erro ou null
- `meta`: Paginação, totais, etc.

## Validação e Tratamento de Erros

- Validação com `class-validator` (DTOs)
- Erros retornam HTTP status adequado e envelope `{ data: null, error, meta: {} }`
- Mensagens de erro claras e padronizadas

## Autenticação

- JWT Bearer Token no header: `Authorization: Bearer <token>`
- Rotas protegidas validam e extraem usuário do token
