import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// 可以再加mysql的连接
@Global()
@Module({
  imports: [MongooseModule.forRoot('mongodb://119.45.209.87:27017/nest', {})],
  exports: [MongooseModule],
})
export class DatabaseModule {}
