import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservasUserComponent } from './ver-reservas-user.component';

describe('VerReservasUserComponent', () => {
  let component: VerReservasUserComponent;
  let fixture: ComponentFixture<VerReservasUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerReservasUserComponent]
    });
    fixture = TestBed.createComponent(VerReservasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
