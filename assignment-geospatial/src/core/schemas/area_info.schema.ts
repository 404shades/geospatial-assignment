import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AreaInfoDocument = HydratedDocument<AreaInfoData>;

@Schema()
export class AreaInfoData {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const AreaInfoSchema = SchemaFactory.createForClass(AreaInfoData);