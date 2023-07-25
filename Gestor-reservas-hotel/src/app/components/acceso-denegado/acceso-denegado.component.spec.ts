import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoDenegadoComponent } from './acceso-denegado.component';

describe('AccesoDenegadoComponent', () => {
  let component: AccesoDenegadoComponent;
  let fixture: ComponentFixture<AccesoDenegadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesoDenegadoComponent]
    });
    fixture = TestBed.createComponent(AccesoDenegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
