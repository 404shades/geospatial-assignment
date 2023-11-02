export interface PointsData {
    _id?:         string;
    type?:        Type;
    coordinates?: number[];
    __v?:         number;
}

export enum Type {
    Point = "Point",
}


export interface PolygonData {
    _id?:         string;
    type?:        Type;
    coordinates?: Array<Array<number[]>>;
    __v?:         number;
}


