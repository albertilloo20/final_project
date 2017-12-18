import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCochesComponent } from './listado-coches.component';

describe('ListadoCochesComponent', () => {
  let component: ListadoCochesComponent;
  let fixture: ComponentFixture<ListadoCochesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCochesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
