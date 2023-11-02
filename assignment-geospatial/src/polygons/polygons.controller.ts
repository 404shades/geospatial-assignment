import { Controller, Delete, Get, Query } from '@nestjs/common';
import { PolygonsService } from './polygons.service';

@Controller('polygons')
export class PolygonsController {
    constructor(private readonly polygonsService: PolygonsService){}

    @Get()
    async findAll(
        @Query('take') take:number = 100,
        @Query('skip') skip:number = 0,
    ){
        return this.polygonsService.findAll(
            take,skip
        );
    }

    @Get(':id')
    async findById(id:string){
        return this.polygonsService.findById(id);
    }

    @Delete(':id')
    async delete(id:string){
        return this.polygonsService.delete(id);
    }

    
}
