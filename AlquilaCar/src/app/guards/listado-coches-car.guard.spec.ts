import { TestBed, async, inject } from '@angular/core/testing';

import { ListadoCochesCarGuard } from './listado-coches-car.guard';

describe('ListadoCochesCarGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListadoCochesCarGuard]
    });
  });

  it('should ...', inject([ListadoCochesCarGuard], (guard: ListadoCochesCarGuard) => {
    expect(guard).toBeTruthy();
  }));
});
