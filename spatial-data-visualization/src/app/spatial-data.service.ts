import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpatialDataService {
  private pointsUrl = `${environment.API_URL}/points`;
  private polygonsUrl = `${environment.API_URL}/polygons`;

  

  constructor(private http: HttpClient) {}

  getPoints(): Observable<any> {
    return this.http.get(this.pointsUrl);
  }

  getPolygons(): Observable<any> {
    return this.http.get(this.polygonsUrl);
  }


}
