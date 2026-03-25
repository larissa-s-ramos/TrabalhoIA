import { Controller, Post, Body, Param } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly service: PaymentsService) {}

  @Post('webhook')
  webhook(@Body() body: { reservaId: number; status: string }) {
    return this.service.webhook(body.reservaId, body.status);
  }
}
