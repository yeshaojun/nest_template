import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';
import { UserService } from '../user/user.service';
import { GraphService } from './graph.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
@ApiTags('graph')
@Controller('graph')
export class GraphController {
  constructor(
    private userService: UserService,
    private graphService: GraphService,
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({ summary: '获取用户流程图数据' })
  async getData(@Req() req: any) {
    const user = await this.userService.findUser(req.user.account);
    return this.graphService.getData(user._id as string);
  }

  @UseGuards(AuthGuard)
  @Post('save')
  @ApiOperation({ summary: '保存用户数据' })
  @ApiBody({
    description: '保存用户数据',
    required: true,
    schema: {
      type: 'object',
      properties: {
        data: { type: 'string', description: '' },
      },
      required: ['account', 'password'],
    },
  })
  async saveData(@Body() res: { data: string }, @Req() req: any) {
    const user = await this.userService.findUser(req.user.account);
    return this.graphService.saveData(res.data, user._id as string);
  }
}
