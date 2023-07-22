import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaReservaComponent } from './nueva-reserva.component';

describe('NuevaReservaComponent', () => {
  let component: NuevaReservaComponent;
  let fixture: ComponentFixture<NuevaReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaReservaComponent]
    });
    fixture = TestBed.createComponent(NuevaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
