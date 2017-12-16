import { TestBed, inject } from '@angular/core/testing';

import { FireServiceService } from './fire-service.service';

describe('FireServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireServiceService]
    });
  });

  it('should be created', inject([FireServiceService], (service: FireServiceService) => {
    expect(service).toBeTruthy();
  }));
});
