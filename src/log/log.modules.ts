import { Module, Global } from '@nestjs/common';
import { LogService } from './log.service';

@Global()
@Module({
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {}
