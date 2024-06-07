import { ApiProperty } from '@nestjs/swagger';
import { Length, Validate, IsNotEmpty } from 'class-validator';
import { checkPhone } from 'src/validator/validator-tel';
export class BaseUserDto {
  @ApiProperty({ description: '账号' })
  @IsNotEmpty()
  @Length(3, 20, {
    message: '账号长度在3到20个字符',
  })
  account: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty()
  @Length(6, 20, {
    message: '密码长度在6到20个字符',
  })
  password: string;
}

export class RegisterUserDto extends BaseUserDto {
  @ApiProperty({ description: '用户昵称' })
  @IsNotEmpty()
  @Length(3, 20, {
    message: '用户昵称长度在3到20个字符',
  })
  name: string;

  @ApiProperty({ description: '手机号' })
  @Validate(checkPhone, {
    message: '手机号格式错误',
  })
  tel?: string;
}
