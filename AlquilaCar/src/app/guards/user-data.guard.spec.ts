import { TestBed, async, inject } from '@angular/core/testing';

import { UserDataGuard } from './user-data.guard';

describe('UserDataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataGuard]
    });
  });

  it('should ...', inject([UserDataGuard], (guard: UserDataGuard) => {
    expect(guard).toBeTruthy();
  }));
});
