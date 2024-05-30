import { BadGatewayException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../database/schemas/user.schema';
@Injectable()
export class UserService {
  constructor(
    private configService: ConfigService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async getUserInfo(id: number) {
    console.log('id', id);

    const result = await this.userModel.findOne({
      _id: id,
    });
    console.log('result', result);

    return '23423423';
  }

  async createUser(form: { account: string; password: string; name: string }) {
    const isRegister = await this.userModel.findOne({
      account: form.account,
    });
    if (isRegister) {
      throw new BadGatewayException('账号已存在！');
    }
    try {
      await this.userModel.create(form);
      return '创建成功';
    } catch (error) {
      throw new BadGatewayException('创建用户失败');
    }
  }
}
