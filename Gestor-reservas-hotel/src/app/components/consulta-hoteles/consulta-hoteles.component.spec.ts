import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaHotelesComponent } from './consulta-hoteles.component';

describe('ConsultaHotelesComponent', () => {
  let component: ConsultaHotelesComponent;
  let fixture: ComponentFixture<ConsultaHotelesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaHotelesComponent]
    });
    fixture = TestBed.createComponent(ConsultaHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
