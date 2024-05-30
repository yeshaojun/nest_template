import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LogService } from '../../log/log.service';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private log: LogService,
  ) {}
  @Get(':id')
  async getUserInfo(@Param() params: { id: number }): Promise<string> {
    return await this.userService.getUserInfo(params.id);
  }

  @Post('/add')
  createUser(
    @Body() form: { account: string; password: string; name: string },
  ) {
    return this.userService.createUser(form);
  }
}
