import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/user.dto';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { User } from 'src/database/schemas/user.schema';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: '登录' })
  @ApiBody({
    description: '登录参数',
    required: true,
    schema: {
      type: 'object',
      properties: {
        account: { type: 'string', description: '账号' },
        password: { type: 'string', description: '密码' },
      },
      required: ['account', 'password'],
    },
  })
  signIn(@Body() signInDto: { account: string; password: string }) {
    return this.authService.signIn(signInDto.account, signInDto.password);
  }

  @Post('/register')
  @ApiOperation({ summary: '注册' })
  register(@Body() registerDto: CreateUserDto) {
    return this.userService.createUser(registerDto as User);
  }
}
