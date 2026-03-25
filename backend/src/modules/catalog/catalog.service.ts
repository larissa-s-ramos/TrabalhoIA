import { Injectable } from '@nestjs/common';
import { viagens, destinos } from '../../database/mock-data';

@Injectable()
export class CatalogService {
  findAll({ destinoId, data, precoMax }: any) {
    let result = viagens;
    if (destinoId) result = result.filter(v => v.destinoId == destinoId);
    if (data) result = result.filter(v => v.data === data);
    if (precoMax) result = result.filter(v => v.preco <= precoMax);
    return result.map(v => ({ ...v, destino: destinos.find(d => d.id === v.destinoId) }));
  }
  findById(id: number) {
    const viagem = viagens.find(v => v.id === id);
    if (!viagem) return null;
    return { ...viagem, destino: destinos.find(d => d.id === viagem.destinoId) };
  }
  listDestinos() {
    return destinos;
  }
}
