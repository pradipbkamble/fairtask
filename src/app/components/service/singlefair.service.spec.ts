import { TestBed } from '@angular/core/testing';

import { SinglefairService } from './singlefair.service';

describe('SinglefairService', () => {
  let service: SinglefairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglefairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
