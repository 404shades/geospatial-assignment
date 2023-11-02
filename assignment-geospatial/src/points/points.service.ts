import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Point, PointsDocument } from './schema/points.schema';
import { Model } from 'mongoose';
import { CreatePointDto } from './dto/points.dto';

@Injectable()
export class PointsService {
    constructor(@InjectModel(Point.name) private pointModel: Model<PointsDocument>) { }
    async create(createPointDto: CreatePointDto): Promise<Point> {
        const createdPoint = new this.pointModel(createPointDto);
        return createdPoint.save();
    }

    async findAll(
        take: number = 100,
        skip: number = 0,
    ): Promise<Point[]> {
        return this.pointModel.find(
            {},
            null,
            {
                limit: take,
                skip,
            },
        ).exec();
    }

    async findById(id: string): Promise<Point> {
        const point = await this.pointModel.findById(id).exec();

        if (!point) {
            throw new NotFoundException(`Point with ID ${id} not found`);
        }

        return point;
    }

    async update(id: string, updatePointDto: CreatePointDto): Promise<Point> {
        const existingPoint = await this.pointModel.findById(id).exec();

        if (updatePointDto.coordinates) {
            existingPoint.location.coordinates = updatePointDto.coordinates;
        }


        return existingPoint.save();
    }

    async delete(id: string): Promise<void> {
        const existingPoint = await this.pointModel.findById(id).exec();
        await existingPoint;
    }


}
