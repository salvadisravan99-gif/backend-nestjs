import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(userId: string, password: string) {
    if (userId === 'admin' && password === 'admin') {
      return { token: 'dummy-jwt-token' };
    }
    return { error: 'Invalid credentials' };
  }
}
