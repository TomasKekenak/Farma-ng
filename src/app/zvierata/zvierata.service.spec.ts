import { TestBed, inject } from '@angular/core/testing';

import { ZvierataService } from './zvierata.service';

describe('ZvierataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZvierataService]
    });
  });

  it('should be created', inject([ZvierataService], (service: ZvierataService) => {
    expect(service).toBeTruthy();
  }));
});
