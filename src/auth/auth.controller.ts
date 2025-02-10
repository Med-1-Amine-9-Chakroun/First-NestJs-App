import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() user: { email: string; pass: string }) {
    return this.authService.login(user.email, user.pass);
  }
}
