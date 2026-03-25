import { Controller, Get, Query, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly service: CatalogService) {}

  @Get('viagens')
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get('viagens/:id')
  findById(@Param('id') id: string) {
    return this.service.findById(Number(id));
  }

  @Get('destinos')
  listDestinos() {
    return this.service.listDestinos();
  }
}
