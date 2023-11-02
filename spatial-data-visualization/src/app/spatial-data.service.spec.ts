import { TestBed } from '@angular/core/testing';

import { SpatialDataService } from './spatial-data.service';

describe('SpatialDataService', () => {
  let service: SpatialDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpatialDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
