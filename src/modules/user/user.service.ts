import { BadGatewayException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../database/schemas/user.schema';
const bcrypt = require('bcrypt');
@Injectable()
export class UserService {
  constructor(
    private configService: ConfigService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async createUser(form: User) {
    const isRegister = await this.userModel.findOne({
      account: form.account,
    });
    if (isRegister) {
      throw new BadGatewayException('账号已存在！');
    }
    const salt = bcrypt.genSaltSync(10);
    const psw = bcrypt.hashSync(form.password, salt);
    try {
      await this.userModel.create({
        ...form,
        password: psw,
      });
      return '创建成功';
    } catch (error) {
      throw new BadGatewayException('创建用户失败');
    }
  }

  async findUser(account: string) {
    const user = await this.userModel.findOne({
      account,
    });
    if (!user) {
      throw new BadGatewayException('账号不存在！');
    }
    return user;
  }

  async checkPassword(pass: string, newpass: string) {
    const correct = await bcrypt.compareSync(pass, newpass);
    if (!correct) {
      throw new BadGatewayException('密码不正确');
    }
  }
}
