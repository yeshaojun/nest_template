import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { LogModule } from './log/log.modules';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
<<<<<<< HEAD
import { GraphModule } from './modules/graph/graph.module';
=======
>>>>>>> 082d2e93d5003affeb3efd51f81c4efae0fe7095

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LogModule,
    DatabaseModule,
    UserModule,
    AuthModule,
<<<<<<< HEAD
    GraphModule,
=======
>>>>>>> 082d2e93d5003affeb3efd51f81c4efae0fe7095
  ],
  controllers: [],
})
export class AppModule {}
