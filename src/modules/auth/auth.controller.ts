import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/user.dto';
import { User } from 'src/database/schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  signIn(@Body() signInDto: { account: string; password: string }) {
    return this.authService.signIn(signInDto.account, signInDto.password);
  }

  @Post('/register')
  register(@Body() registerDto: CreateUserDto) {
    return this.userService.createUser(registerDto as User);
  }
}
