import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Graph } from 'src/database/schemas/graph.schema';

@Injectable()
export class GraphService {
  constructor(@InjectModel(Graph.name) private graphModel: Model<Graph>) {}
  async saveData(data: string, userId: string) {
    try {
      const res = await this.graphModel.findOne({
        user: userId,
      });
      if (res) {
        await this.graphModel.updateOne(
          {
            _id: res._id,
          },
          {
            data: data,
          },
        );
      } else {
        await this.graphModel.create({
          user: userId,
          data: data,
        });
      }
      return '保存成功';
    } catch (error) {
      console.log(error);
    }
  }

  async getData(id: string) {
    return await this.graphModel.findOne(
      {
        user: id,
      },
      {
        data: 1,
        user: 1,
      },
    );
  }
}
