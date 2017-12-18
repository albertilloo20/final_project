import { TestBed, inject } from '@angular/core/testing';

import { CargaImagenService } from './carga-imagen.service';

describe('CargaImagenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargaImagenService]
    });
  });

  it('should be created', inject([CargaImagenService], (service: CargaImagenService) => {
    expect(service).toBeTruthy();
  }));
});
