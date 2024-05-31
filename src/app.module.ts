import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { LogModule } from './log/log.modules';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { GraphModule } from './modules/graph/graph.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LogModule,
    DatabaseModule,
    UserModule,
    AuthModule,
    GraphModule,
  ],
  controllers: [],
})
export class AppModule {}
