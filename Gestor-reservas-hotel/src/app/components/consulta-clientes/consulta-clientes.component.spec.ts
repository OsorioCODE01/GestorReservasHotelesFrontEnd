import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaClientesComponent } from './consulta-clientes.component';

describe('ConsultaClientesComponent', () => {
  let component: ConsultaClientesComponent;
  let fixture: ComponentFixture<ConsultaClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaClientesComponent]
    });
    fixture = TestBed.createComponent(ConsultaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
