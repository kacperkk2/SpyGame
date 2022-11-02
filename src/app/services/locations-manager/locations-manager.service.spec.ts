import { TestBed } from '@angular/core/testing';

import { LocationsManagerService } from './locations-manager.service';

describe('LocationsManagerService', () => {
  let service: LocationsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
