import { TestBed, async, inject } from '@angular/core/testing';

import { UploadCarGuard } from './upload-car.guard';

describe('UploadCarGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadCarGuard]
    });
  });

  it('should ...', inject([UploadCarGuard], (guard: UploadCarGuard) => {
    expect(guard).toBeTruthy();
  }));
});
