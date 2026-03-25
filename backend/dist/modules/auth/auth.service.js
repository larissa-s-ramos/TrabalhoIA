"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mock_data_1 = require("../../database/mock-data");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let AuthService = class AuthService {
    async validateUser(email, senha) {
        const user = mock_data_1.users.find(u => u.email === email);
        if (!user || !bcrypt.compareSync(senha, user.senha)) {
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        }
        return { id: user.id, nome: user.nome, email: user.email, tipo: user.tipo };
    }
    async login(email, senha) {
        const user = await this.validateUser(email, senha);
        const token = jwt.sign(user, process.env.JWT_SECRET || 'supersecret', { expiresIn: '1d' });
        return { token, user };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map