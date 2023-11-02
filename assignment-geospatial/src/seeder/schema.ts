// seed-models/point.seed-model.ts

import * as mongoose from 'mongoose';

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

export const PointSeedModel = mongoose.model('Point', pointSchema);



const polygonSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Polygon'],
    required: true,
  },
  coordinates: {
    type: [[[Number]]], 
    required: true,
  },
});

export const PolygonSeedModel = mongoose.model('Polygon', polygonSchema);
