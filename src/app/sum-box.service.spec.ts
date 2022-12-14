import { TestBed } from '@angular/core/testing';

import { SumBoxService } from './sum-box.service';

describe('SumBoxService', () => {
  let service: SumBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
