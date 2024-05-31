import { Module } from '@nestjs/common';
import { GraphController } from './graph.controller';
import { GraphService } from './graph.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphSchema, Graph } from '../../database/schemas/graph.schema';
import { UserModule } from '../user/user.module';
@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: Graph.name, schema: GraphSchema }]),
  ],
  controllers: [GraphController],
  providers: [GraphService],
})
export class GraphModule {}
