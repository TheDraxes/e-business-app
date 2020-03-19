import { TestBed } from '@angular/core/testing';

import { OtmApiService } from './otm-api.service';

describe('OtmApiService', () => {
  let service: OtmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
