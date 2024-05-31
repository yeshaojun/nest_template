<<<<<<< HEAD
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(account, pass) {
    const user = await this.userService.findUser(account);
    this.userService.checkPassword(pass, user.password);
    const payload = { sub: user.name, account: user.account };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        name: user.name,
        account: user.account,
      },
    };
  }
}
=======
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(account, pass) {
    const user = await this.userService.findUser(account);
    this.userService.checkPassword(pass, user.password);
    const payload = { sub: user.name, account: user.account };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
>>>>>>> 082d2e93d5003affeb3efd51f81c4efae0fe7095
