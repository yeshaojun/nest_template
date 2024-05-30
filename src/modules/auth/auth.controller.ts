import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() signInDto: { account: string; password: string }) {
    return this.authService.signIn(signInDto.account, signInDto.password);
  }
}
