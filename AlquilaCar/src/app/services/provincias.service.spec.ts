import { TestBed, inject } from '@angular/core/testing';

import { ProvinciasService } from './provincias.service';

describe('ProvinciasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvinciasService]
    });
  });

  it('should be created', inject([ProvinciasService], (service: ProvinciasService) => {
    expect(service).toBeTruthy();
  }));
});
