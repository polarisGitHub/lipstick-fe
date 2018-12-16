import { TestBed } from '@angular/core/testing';

import { LipstickService } from './lipstick.service';

describe('LipstickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LipstickService = TestBed.get(LipstickService);
    expect(service).toBeTruthy();
  });
});
