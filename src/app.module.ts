import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { LogModule } from './log/log.modules';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { GraphModule } from './modules/graph/graph.module';
import { LogService } from './log/log.service';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './filters/all-exceptions';
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
  providers: [
    LogService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
