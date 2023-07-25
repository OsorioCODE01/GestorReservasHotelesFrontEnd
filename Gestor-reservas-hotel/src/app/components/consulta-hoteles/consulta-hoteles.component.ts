import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { HotelService } from 'src/app/services/hotel/hotel.service';

@Component({
  selector: 'app-consulta-hoteles',
  templateUrl: './consulta-hoteles.component.html',
  styleUrls: ['./consulta-hoteles.component.css'],
})
export class ConsultaHotelesComponent implements OnInit {
  Hoteles: any = [];

  constructor(
    private hotelService: HotelService,
    private router: Router,
    private notificaciones: NotificacionesService
  ) {}
  ngOnInit(): void {
    this.obtenerHoteles();
  }

  obtenerHoteles() {
    this.hotelService.ObtenerHoteles().subscribe(
      (res) => {
        this.Hoteles = res;
        console.log(this.Hoteles);
        this.notificaciones.showNotification('Consulta Exitosa', 'green');
      },
      (err) => {
        console.error('Error', err);
        if (err.error && err.error.message) {
          this.notificaciones.showNotification(err.error.message, 'red');
        }
      }
    );
  }
  verDetallesHotel(hotel: any) {
    this.router.navigate(['/addHabitacion', hotel]);
  }

  BorrarHotel(idHotel: any) {
    this.hotelService.BorrarHotel(idHotel).subscribe(
      (res) => {
        this.obtenerHoteles();
        this.notificaciones.showNotification('Hotel Borrado', 'green');
      },
      (err) => {
        console.error('Error', err);
        if (err.error && err.error.message) {
          this.notificaciones.showNotification(err.error.message, 'red');
        } else {
          this.notificaciones.showNotification('Error al Borrar Hotel', 'red');
        }
      }
    );
  }
}
