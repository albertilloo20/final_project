import { TestBed, inject } from '@angular/core/testing';

import { CochesService } from './coches.service';

describe('CochesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CochesService]
    });
  });

  it('should be created', inject([CochesService], (service: CochesService) => {
    expect(service).toBeTruthy();
  }));
});
