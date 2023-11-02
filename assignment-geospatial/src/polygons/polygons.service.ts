import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Polygon, PolygonDocument } from './schema/polygon.schema';
import { Model } from 'mongoose';
import { CreatePolygonDto, UpdatePolygonDto } from './dto/polygon.dto';

@Injectable()
export class PolygonsService {
    constructor(@InjectModel(Polygon.name) private polygonModel: Model<PolygonDocument>) { }

    async create(createPolygonDto: CreatePolygonDto): Promise<Polygon> {
        const createdPolygon = new this.polygonModel(createPolygonDto);
        return createdPolygon.save();
      }

      async findAll(
        take: number = 100,
        skip: number = 0,
      ): Promise<Polygon[]> {
        return this.polygonModel.find(
            {},
            null,
            {
                limit: take,
                skip,
            },
        ).exec();
      }

      async findById(id: string): Promise<Polygon> {
        const polygon = await this.polygonModel.findById(id).exec();
      
        if (!polygon) {
          throw new NotFoundException(`Polygon with ID ${id} not found`);
        }
      
        return polygon;
      }

      
      async delete(id: string): Promise<void> {
         await this.polygonModel.findByIdAndRemove(id).exec();
      }
      
      
      

      
      

}
