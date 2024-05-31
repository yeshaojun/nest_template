import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';

@Schema({ timestamps: true })
export class Graph extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;
  @Prop()
  data: string;
}

export const GraphSchema = SchemaFactory.createForClass(Graph);
