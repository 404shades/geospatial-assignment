import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { PointsService } from './points.service';
import { CreatePointDto } from './dto/points.dto';

@Controller('points')
export class PointsController {
    constructor(private readonly pointsService: PointsService) { }

    @Post()
    async create(@Body() createPointDTO: CreatePointDto) {
        return this.pointsService.create(createPointDTO);
    }

    @Get()
    async findAll(@Query('take') take: number = 100, @Query('skip') skip: number = 0) {
        return this.pointsService.findAll(
            take, skip
        );
    }

    @Get(':id')
    async findById(id: string) {
        return this.pointsService.findById(id);
    }

    @Patch(':id')
    async update(@Body() updatePointDTO: CreatePointDto, id: string) {
        return this.pointsService.update(id, updatePointDTO);
    }

    @Delete(':id')
    async delete(id: string) {
        return this.pointsService.delete(id);
    }

}
