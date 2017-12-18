import { TestBed, inject } from '@angular/core/testing';

import { CargaCocheService } from './carga-coche.service';

describe('CargaCocheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargaCocheService]
    });
  });

  it('should be created', inject([CargaCocheService], (service: CargaCocheService) => {
    expect(service).toBeTruthy();
  }));
});
