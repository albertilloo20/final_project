import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubidaCocheComponent } from './subida-coche.component';

describe('SubidaCocheComponent', () => {
  let component: SubidaCocheComponent;
  let fixture: ComponentFixture<SubidaCocheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubidaCocheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubidaCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
