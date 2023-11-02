import { Module } from '@nestjs/common';
import { PolygonsService } from './polygons.service';
import { PolygonsController } from './polygons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Polygon, PolygonSchema } from './schema/polygon.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Polygon.name,schema:PolygonSchema}
    ])
  ],
  providers: [PolygonsService],
  controllers: [PolygonsController]
})
export class PolygonsModule {}
