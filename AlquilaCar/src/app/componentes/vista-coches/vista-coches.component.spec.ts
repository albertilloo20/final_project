import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCochesComponent } from './vista-coches.component';

describe('VistaCochesComponent', () => {
  let component: VistaCochesComponent;
  let fixture: ComponentFixture<VistaCochesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCochesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
