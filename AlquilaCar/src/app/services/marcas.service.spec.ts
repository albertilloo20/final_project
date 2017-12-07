import { TestBed, inject } from '@angular/core/testing';

import { MarcasService } from './marcas.service';

describe('MarcasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarcasService]
    });
  });

  it('should be created', inject([MarcasService], (service: MarcasService) => {
    expect(service).toBeTruthy();
  }));
});
