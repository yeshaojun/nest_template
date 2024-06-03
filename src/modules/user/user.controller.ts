import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LogService } from '../../log/log.service';
import { AuthGuard } from '../../guard/auth.guard';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private log: LogService,
  ) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async getUserInfo(@Req() req: any): Promise<string> {
    return req.user;
  }
  // 退出登陆需要使用白名单根黑名单的方案，比如将token存缓存，
}
