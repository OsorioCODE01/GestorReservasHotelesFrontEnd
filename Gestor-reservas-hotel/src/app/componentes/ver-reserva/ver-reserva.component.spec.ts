import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservaComponent } from './ver-reserva.component';

describe('VerReservaComponent', () => {
  let component: VerReservaComponent;
  let fixture: ComponentFixture<VerReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerReservaComponent]
    });
    fixture = TestBed.createComponent(VerReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
