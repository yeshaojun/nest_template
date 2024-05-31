import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { DB_CONFIG } from 'src/config/index';
// 可以再加mysql的连接
@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        let uri = 'mongodb://';
        if (configService.get(DB_CONFIG.DB_USER)) {
          uri += `${configService.get(DB_CONFIG.DB_USER)}:${configService.get(DB_CONFIG.DB_PASSWORD)}@`;
        }
        uri += `${configService.get(DB_CONFIG.DB_HOST)}:${configService.get(DB_CONFIG.DB_PORT)}/${configService.get(DB_CONFIG.DB_NAME)}`;
        return {
          uri,
        };
      },
      inject: [ConfigService],
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
