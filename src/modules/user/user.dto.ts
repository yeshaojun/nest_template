import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, Validate } from 'class-validator';
import { checkPhone } from 'src/validator/validator-tel';
export class CreateUserDto {
  @ApiProperty({ description: '用户昵称' })
  @IsString()
  @Length(3, 20)
  name: string;

  @ApiProperty({ description: '账号' })
  @IsString()
  @Length(3, 20)
  account: string;

  @ApiProperty({ description: '密码' })
  @IsString()
  @Length(6, 20)
  password: string;

  @ApiProperty({ description: '手机号' })
  @Validate(checkPhone)
  tel?: string;
}
