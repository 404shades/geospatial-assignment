import { Component, OnInit } from '@angular/core';
import { SpatialDataService } from './spatial-data.service';
import { PointsData, PolygonData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mapStyle = 'mapbox://styles/404shades/ck1gf8t4f51x81cp1sd1hve0j';
  center: [number, number] = [76.59638156639471,28.899385205729615,];
  zoom: [number] = [5]

  pointsLayer: any; // Holds the layer for points
  polygonsLayer: any; // Holds the layer for polygons

  constructor(private spatialDataService: SpatialDataService) { }
  ngOnInit(): void {
    this.addSpatialData();
  }

  private addSpatialData(): void {
    this.spatialDataService.getPoints().subscribe((points:PointsData[]) => {
      this.pointsLayer = {
        type: 'FeatureCollection',
        features: points.map((point:PointsData) => {
          return {
            type: 'Feature',
            geometry: {
              type: point.type,
              coordinates: point.coordinates
            }
          };
        }
        )
      };
    });

    this.spatialDataService.getPolygons().subscribe((polygons:PolygonData[]) => {
      this.polygonsLayer = {
        type: 'FeatureCollection',
        features: {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: polygons[0].coordinates
          }
        }
      };
    });
  }


}
