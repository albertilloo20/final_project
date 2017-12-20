import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiosComponent } from './adios.component';

describe('AdiosComponent', () => {
  let component: AdiosComponent;
  let fixture: ComponentFixture<AdiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
