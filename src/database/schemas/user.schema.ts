import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  account: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  tel?: string;
  @Prop()
  email?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
