import { TestBed, inject } from '@angular/core/testing';

import { PoliaService } from './polia.service';

describe('PoliaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliaService]
    });
  });

  it('should be created', inject([PoliaService], (service: PoliaService) => {
    expect(service).toBeTruthy();
  }));
});
