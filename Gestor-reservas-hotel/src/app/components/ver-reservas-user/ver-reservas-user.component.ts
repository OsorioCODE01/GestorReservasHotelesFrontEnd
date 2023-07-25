import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ReservaService } from 'src/app/services/resevas/reserva.service';

@Component({
  selector: 'app-ver-reservas-user',
  templateUrl: './ver-reservas-user.component.html',
  styleUrls: ['./ver-reservas-user.component.css'],
})
export class VerReservasUserComponent implements OnInit {
  userInfo!: any;
  Reservas: any = [];
  constructor(
    private reservaService: ReservaService,
    private router: Router,
    private notificacion: NotificacionesService,
    private authService: LoginService
  ) {
    this.userInfo = this.authService.getUserInfo();
  }

  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas() {
    this.reservaService
      .ObtenerReservasPorCliente(this.userInfo.idCliente)
      .subscribe(
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

  regresar() {
    this.router.navigate(['/inicio']);
  }
}
