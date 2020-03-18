import { TestBed } from '@angular/core/testing';

import { OwmApiService } from './owm-api.service';

describe('OwmApiService', () => {
  let service: OwmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
