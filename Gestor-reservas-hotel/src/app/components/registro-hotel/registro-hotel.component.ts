import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { Hotel } from 'src/models/Hotel';

@Component({
  selector: 'app-registro-hotel',
  templateUrl: './registro-hotel.component.html',
  styleUrls: ['./registro-hotel.component.css'],
})
export class RegistroHotelComponent {
  constructor(
    private hotelService: HotelService,
    private notificaciones: NotificacionesService,
    private router: Router
  ) {}

  public NuevoHotel!: Hotel;

  public FormHotel = new FormGroup({
    idHotel: new FormControl('', [Validators.required]),
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
  });

  public RegistrarHotel() {
    this.NuevoHotel = {
      idHotel: this.FormHotel.get('idHotel')!.value,
      nombre: this.FormHotel.get('nombre')!.value,
      telefono: this.FormHotel.get('telefono')!.value,
      correo: this.FormHotel.get('correo')!.value,
    };
    this.hotelService.RegistrarHotel(this.NuevoHotel).subscribe(
      (data) => {
        console.log(data),
          this.notificaciones.showNotification('Registro exitoso', 'green');
        this.router.navigate(['/addHabitacion', this.NuevoHotel]);
      },
      (error) => {
        console.error('Error', error);
        if (error.error && error.error.message) {
          this.notificaciones.showNotification(error.error.message, 'red');
        } else {
          this.notificaciones.showNotification('Error en el servidor', 'red');
        }
      }
    );
    this.FormHotel.reset();
  }
}
