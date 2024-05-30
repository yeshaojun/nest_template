import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { LogModule } from './log/log.modules';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LogModule,
    DatabaseModule,
    UserModule,
  ],
  controllers: [],
})
export class AppModule {}
