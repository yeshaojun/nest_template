import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'checkPhone', async: false })
export class checkPhone implements ValidatorConstraintInterface {
  validate(tel: string) {
    return !tel || /^1[3-9]\d{9}'/.test(tel);
  }

  defaultMessage() {
    return '手机号格式不正确';
  }
}
