import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PointsDocument = HydratedDocument<Point>;

@Schema()
export class Point {
  @Prop({
    type:{
        type:   String,
        enum:  ['Point'],
        required: true
    },
    coordinates:{
        type:   [Number],
        required: true
    }
  })
  location: {
    type: string;
    coordinates: number[];
  };

}

export const PointsSchema = SchemaFactory.createForClass(Point);
PointsSchema.index({ location: "2dsphere" });