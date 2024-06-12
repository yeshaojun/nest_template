import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../guard/auth.guard';
import { ApiTags, ApiParam, ApiOperation } from '@nestjs/swagger';
@ApiTags('user')
@Controller('user')
export class UserController {
  @UseGuards(AuthGuard)
  @Get(':id')
  @ApiOperation({ summary: '获取用户信息' })
  @ApiParam({ name: 'id', description: '用户id', type: String })
  async getUserInfo(@Req() req: any): Promise<string> {
    return req.user;
  }
  // 退出登陆需要使用白名单根黑名单的方案，比如将token存缓存，
}
