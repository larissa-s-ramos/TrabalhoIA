"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogService = void 0;
const common_1 = require("@nestjs/common");
const mock_data_1 = require("../../database/mock-data");
let CatalogService = class CatalogService {
    findAll({ destinoId, data, precoMax }) {
        let result = mock_data_1.viagens;
        if (destinoId)
            result = result.filter(v => v.destinoId == destinoId);
        if (data)
            result = result.filter(v => v.data === data);
        if (precoMax)
            result = result.filter(v => v.preco <= precoMax);
        return result.map(v => (Object.assign(Object.assign({}, v), { destino: mock_data_1.destinos.find(d => d.id === v.destinoId) })));
    }
    findById(id) {
        const viagem = mock_data_1.viagens.find(v => v.id === id);
        if (!viagem)
            return null;
        return Object.assign(Object.assign({}, viagem), { destino: mock_data_1.destinos.find(d => d.id === viagem.destinoId) });
    }
    listDestinos() {
        return mock_data_1.destinos;
    }
};
exports.CatalogService = CatalogService;
exports.CatalogService = CatalogService = __decorate([
    (0, common_1.Injectable)()
], CatalogService);
//# sourceMappingURL=catalog.service.js.map