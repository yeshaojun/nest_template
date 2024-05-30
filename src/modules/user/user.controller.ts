import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
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

  @Post('/add')
  createUser(
    @Body() form: { account: string; password: string; name: string },
  ) {
    return this.userService.createUser(form);
  }
}
