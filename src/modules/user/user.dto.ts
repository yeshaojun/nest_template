import { IsString, Length, Validate } from 'class-validator';
import { checkPhone } from 'src/validator/validator-tel';
export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  name: string;

  @IsString()
  @Length(3, 20)
  account: string;

  @IsString()
  @Length(6, 20)
  password: string;

  @Validate(checkPhone)
  tel?: string;
}
