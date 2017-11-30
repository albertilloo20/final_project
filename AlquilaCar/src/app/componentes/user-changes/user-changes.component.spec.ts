import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChangesComponent } from './user-changes.component';

describe('UserChangesComponent', () => {
  let component: UserChangesComponent;
  let fixture: ComponentFixture<UserChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
