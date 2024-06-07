import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { BaseUserDto, RegisterUserDto } from '../user/user.dto';
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
  @UsePipes(new ValidationPipe({ skipMissingProperties: true }))
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
  signIn(@Body() signInDto: BaseUserDto) {
    return this.authService.signIn(signInDto.account, signInDto.password);
  }

  @Post('/register')
  @ApiOperation({ summary: '注册' })
  register(@Body() registerDto: RegisterUserDto) {
    return this.userService.createUser(registerDto as User);
  }
}
