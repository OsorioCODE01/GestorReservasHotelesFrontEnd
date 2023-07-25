import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { ReservaService } from 'src/app/services/resevas/reserva.service';

@Component({
  selector: 'app-consulta-reservas',
  templateUrl: './consulta-reservas.component.html',
  styleUrls: ['./consulta-reservas.component.css'],
})
export class ConsultaReservasComponent implements OnInit {
  Reservas: any = [];
  constructor(
    private reservaService: ReservaService,
    private notificacion: NotificacionesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas() {
    this.reservaService.ObtenerReservas().subscribe(
      (res: any) => {
        this.Reservas = res;
        console.log(this.Reservas);
        this.notificacion.showNotification('Reservas obtenidas', 'green');
      },
      (err: any) => {
        if (err.error && err.error.message) {
          this.notificacion.showNotification(err.error.message, 'red');
        } else {
          this.notificacion.showNotification(
            'Error al obtener las reservas',
            'red'
          );
        }
      }
    );
  }

  eliminarReserva(idReserva: any) {
    this.reservaService.EliminarReserva(idReserva).subscribe(
      (res: any) => {
        console.log('Borre: ' + res);
        this.notificacion.showNotification('Reserva eliminada', 'red');
        this.obtenerReservas();
      },
      (err: any) => {
        if (err.error && err.error.message) {
          this.notificacion.showNotification(err.error.message, 'red');
        } else {
          this.notificacion.showNotification(
            'Error al eliminar la reserva',
            'red'
          );
        }
      }
    );
  }

  editarReserva(idCliente: any, idHotel: any) {
    this.router.navigate(['/editar-reserva'], {
      queryParams: { idCliente: idCliente, idHotel: idHotel },
    });
  }
}
