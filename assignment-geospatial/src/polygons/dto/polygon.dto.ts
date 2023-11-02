import { IsArray, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';

class CoordinatesDto {
  @IsArray()
  @IsArray({ each: true })
  @IsNotEmpty()
  coordinates: number[][];
}

export class CreatePolygonDto {
  @IsString()
  @IsNotEmpty()
  readonly type: string = 'Polygon';

  @IsObject()
  @ValidateNested()
  readonly location: CoordinatesDto;

}





export class UpdatePolygonDto {
  @IsString()
  @IsOptional()
  readonly type: string = 'Polygon';

  @IsObject()
  @ValidateNested()
  @IsOptional()
  readonly location: CoordinatesDto;

}
