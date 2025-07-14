import { Controller } from '@nestjs/common';
import { AuthService } from './providers';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
