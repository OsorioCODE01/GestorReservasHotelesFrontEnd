import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHotelComponent } from './registro-hotel.component';

describe('RegistroHotelComponent', () => {
  let component: RegistroHotelComponent;
  let fixture: ComponentFixture<RegistroHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroHotelComponent]
    });
    fixture = TestBed.createComponent(RegistroHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
