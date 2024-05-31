<<<<<<< HEAD
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

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
  register(
    @Body() registerDto: { account: string; password: string; name: string },
  ) {
    return this.userService.createUser(registerDto);
  }
}
=======
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
>>>>>>> 082d2e93d5003affeb3efd51f81c4efae0fe7095
