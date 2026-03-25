import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('reports')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
export class ReportsController {
  constructor(private readonly service: ReportsService) {}

  @Get('vendas')
  totalVendas(@Query('inicio') inicio: string, @Query('fim') fim: string) {
    return this.service.totalVendasPorPeriodo(inicio, fim);
  }

  @Get('reservas')
  listarReservas(@Query() query: any) {
    return this.service.listarReservas(query);
  }
}
