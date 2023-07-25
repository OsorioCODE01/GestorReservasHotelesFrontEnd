import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaReservasComponent } from './consulta-reservas.component';

describe('ConsultaReservasComponent', () => {
  let component: ConsultaReservasComponent;
  let fixture: ComponentFixture<ConsultaReservasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaReservasComponent]
    });
    fixture = TestBed.createComponent(ConsultaReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
