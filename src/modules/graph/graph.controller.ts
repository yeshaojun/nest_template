import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/auth.guard';
import { UserService } from '../user/user.service';
import { GraphService } from './graph.service';

@Controller('graph')
export class GraphController {
  constructor(
    private userService: UserService,
    private graphService: GraphService,
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async getData(@Req() req: any) {
    const user = await this.userService.findUser(req.user.account);
    return this.graphService.getData(user._id as string);
  }

  @UseGuards(AuthGuard)
  @Post('save')
  async saveData(@Body() res: { data: string }, @Req() req: any) {
    console.log('res', res, typeof res);
    const user = await this.userService.findUser(req.user.account);
    return this.graphService.saveData(res.data, user._id as string);
  }
}
