import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {  HydratedDocument } from 'mongoose';

export type PolygonDocument = HydratedDocument<Polygon>;

@Schema()
export class Polygon {
  @Prop({
    type: {
      type: String,
      enum: ['Polygon'],
      required: true,
    },
    coordinates: {
      type: [[[Number]]], 
      required: true,
    },
  })
  location: {
    type: string;
    coordinates: number[][][];
  };
}

export const PolygonSchema = SchemaFactory.createForClass(Polygon);

PolygonSchema.index({ location: '2dsphere' });
