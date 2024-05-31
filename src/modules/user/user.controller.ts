<<<<<<< HEAD
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
=======
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
>>>>>>> 082d2e93d5003affeb3efd51f81c4efae0fe7095
import { UserService } from './user.service';
import { LogService } from '../../log/log.service';
import { AuthGuard } from '../../guard/auth.guard';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private log: LogService,
  ) {}
<<<<<<< HEAD
=======

  @UseGuards(AuthGuard)
  @Get(':id')
  async getUserInfo(@Req() req: any): Promise<string> {
    return req.user;
  }
>>>>>>> 082d2e93d5003affeb3efd51f81c4efae0fe7095

  @UseGuards(AuthGuard)
  @Get(':id')
  async getUserInfo(@Req() req: any): Promise<string> {
    return req.user;
  }
}
