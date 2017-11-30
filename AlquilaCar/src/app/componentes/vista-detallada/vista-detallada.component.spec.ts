import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDetalladaComponent } from './vista-detallada.component';

describe('VistaDetalladaComponent', () => {
  let component: VistaDetalladaComponent;
  let fixture: ComponentFixture<VistaDetalladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDetalladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
