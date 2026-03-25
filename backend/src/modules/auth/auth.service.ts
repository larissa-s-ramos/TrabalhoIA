import { Injectable, UnauthorizedException } from '@nestjs/common';
import { users } from '../../database/mock-data';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  async validateUser(email: string, senha: string) {
    const user = users.find(u => u.email === email);
    if (!user || !bcrypt.compareSync(senha, user.senha)) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    return { id: user.id, nome: user.nome, email: user.email, tipo: user.tipo };
  }

  async login(email: string, senha: string) {
    const user = await this.validateUser(email, senha);
    const token = jwt.sign(user, process.env.JWT_SECRET || 'supersecret', { expiresIn: '1d' });
    return { token, user };
  }
}
