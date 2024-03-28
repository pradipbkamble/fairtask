import { TestBed } from '@angular/core/testing';

import { FairserService } from './fairser.service';

describe('FairserService', () => {
  let service: FairserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FairserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
