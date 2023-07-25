import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHotelComponent } from './editar-hotel.component';

describe('EditarHotelComponent', () => {
  let component: EditarHotelComponent;
  let fixture: ComponentFixture<EditarHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarHotelComponent]
    });
    fixture = TestBed.createComponent(EditarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
