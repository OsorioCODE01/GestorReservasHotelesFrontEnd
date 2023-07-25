import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { ClienteService } from 'src/app/services/RegistroCliente/cliente.service';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ReservaService } from 'src/app/services/resevas/reserva.service';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.css'],
})
export class EditarReservaComponent implements OnInit {
  ReservaInfo!: any;
  idsBusqueda!: any;
  HabitacionesDisponibles: any = [];
  Clientes: any = [];
  ReservaForm!: any;
  isAmin: boolean = false;
  constructor(
    private reservaService: ReservaService,
    private router: Router,
    private route: ActivatedRoute,
    private notificacion: NotificacionesService,
    private hotelService: HotelService,
    private clienteService: ClienteService,
    private authService: LoginService
  ) {
    const UserInfo = this.authService.getUserInfo();
    if (UserInfo) {
      this.isAmin = UserInfo.nivel;
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idsBusqueda = params;
      console.log(this.idsBusqueda);
    });
    if (this.idsBusqueda) {
      this.obtenerReserva();
    }
  }

  initForm() {
    this.ReservaForm = new FormGroup({
      idReserva: new FormControl(
        this.ReservaInfo.idReserva,
        Validators.required
      ),
      idCliente: new FormControl(
        this.ReservaInfo.idCliente,
        Validators.required
      ),
      idHotel: new FormControl(this.ReservaInfo.idHotel, Validators.required),
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
    });
  }

  clienteEnReserva(clienteId: any): boolean {
    // Verificar si el clienteId está presente en la lista de clientes de la reserva
    if (this.ReservaInfo.clientes) {
      return this.ReservaInfo.clientes.some(
        (cliente: any) => cliente.idCliente === clienteId
      );
    }
    return false;
  }

  obtenerReserva() {
    this.reservaService
      .ObtenerReservaPorHotelyCliente(
        this.idsBusqueda.idHotel,
        this.idsBusqueda.idCliente
      )
      .subscribe(
        (res) => {
          this.ReservaInfo = res;
          this.initForm();
          console.log(this.ReservaInfo);
          this.ReservaForm.patchValue({
            idCliente: this.ReservaInfo.idCliente,
            idHotel: this.ReservaInfo.idHotel,
            fechaInicio: this.ReservaInfo.fechaInicio,
            fechaFin: this.ReservaInfo.fechaFin,
          });

          this.obtenerHabitacionesDisponibles();
          this.obtenerClientes();
        },
        (err) => {
          console.error('Error', err);
          if (err.error && err.error.message) {
            this.notificacion.showNotification(err.error.message, 'red');
          } else {
            this.notificacion.showNotification(
              'Error al obtener la reserva',
              'red'
            );
          }
        }
      );
  }

  obtenerHabitacionesDisponibles() {
    this.hotelService
      .ObtenerHabitacionesPorHotel(this.ReservaInfo.idHotel.idHotel)
      .subscribe(
        (res) => {
          this.HabitacionesDisponibles = res;
          console.log(this.HabitacionesDisponibles);
        },
        (err) => {
          console.error('Error', err);
          if (err.error && err.error.message) {
            this.notificacion.showNotification(err.error.message, 'red');
          } else {
            this.notificacion.showNotification(
              'Error al obtener las habitaciones',
              'red'
            );
          }
        }
      );
  }

  obtenerClientes() {
    this.clienteService.ObtenerClientes().subscribe(
      (res) => {
        this.Clientes = res;
        console.log(this.Clientes);
      },
      (err) => {
        console.error('Error', err);
        if (err.error && err.error.message) {
          this.notificacion.showNotification(err.error.message, 'red');
        } else {
          this.notificacion.showNotification(
            'Error al obtener los clientes',
            'red'
          );
        }
      }
    );
  }

  anadirCliente(idCliente: any) {
    this.reservaService
      .AgregarClienteAReserva(
        this.ReservaInfo.idReserva,
        1,
        idCliente,
        this.ReservaInfo
      )
      .subscribe(
        (res) => {
          this.notificacion.showNotification('Cliente Añadid0', 'green');
          this.obtenerReserva();
        },
        (err) => {
          console.error('Error', err);
          if (err.error && err.error.message) {
            this.notificacion.showNotification(err.error.message, 'red');
          } else {
            this.notificacion.showNotification(
              'Error al añadir el cliente',
              'red'
            );
          }
        }
      );
  }

  quitarCliente(idCliente: any) {
    this.reservaService
      .QuitarClienteDeReserva(
        this.ReservaInfo.idReserva,
        2,
        idCliente,
        this.ReservaInfo
      )
      .subscribe(
        (res) => {
          this.notificacion.showNotification('Cliente Quitado', 'red');
          this.obtenerReserva();
        },
        (err) => {
          console.error('Error', err);
          if (err.error && err.error.message) {
            this.notificacion.showNotification(err.error.message, 'red');
          } else {
            this.notificacion.showNotification(
              'Error al quitar el cliente',
              'red'
            );
          }
        }
      );
  }

  anadirHabitacion(idHabitacion: any) {
    this.reservaService
      .AñadirHabitacionDeReserva(
        this.ReservaInfo.idReserva,
        3,
        idHabitacion,
        this.ReservaInfo
      )
      .subscribe(
        (res) => {
          this.notificacion.showNotification('Habitacion Añadida', 'green');
          this.obtenerReserva();
        },
        (err) => {
          console.error('Error', err);
          if (err.error && err.error.message) {
            this.notificacion.showNotification(err.error.message, 'red');
          } else {
            this.notificacion.showNotification(
              'Error al añadir la habitacion',
              'red'
            );
          }
        }
      );
  }

  quitarHabitacion(idHabitacion: any) {
    this.reservaService
      .QuitarHabitacionDeReserva(
        this.ReservaInfo.idReserva,
        4,
        idHabitacion,
        this.ReservaInfo
      )
      .subscribe(
        (res) => {
          this.notificacion.showNotification('Habitacion Quitada', 'red');
          this.obtenerReserva();
        },
        (err) => {
          console.error('Error', err);
          if (err.error && err.error.message) {
            this.notificacion.showNotification(err.error.message, 'red');
          } else {
            this.notificacion.showNotification(
              'Error al quitar la habitacion',
              'red'
            );
          }
        }
      );
  }

  actualizarReserva() {
    this.ReservaInfo = {
      idReserva: this.ReservaForm.value.idReserva,
      idCliente: this.ReservaForm.value.idCliente,
      idHotel: this.ReservaForm.value.idHotel,
      fechaInicio: this.ReservaForm.value.fechaInicio,
      fechaFin: this.ReservaForm.value.fechaFin,
    };
    this.reservaService
      .EditarInfoReserva(this.ReservaInfo.idReserva, 0, 0, this.ReservaInfo)
      .subscribe(
        (res) => {
          this.notificacion.showNotification('Reserva Actualizada', 'green');
          this.obtenerReserva();
        },
        (err) => {
          console.error('Error', err);
          if (err.error && err.error.message) {
            this.notificacion.showNotification(err.error.message, 'red');
          } else {
            this.notificacion.showNotification(
              'Error al actualizar la reserva',
              'red'
            );
          }
        }
      );
  }

  regresar() {
    if (this.isAmin) {
      this.router.navigate(['/consulta-reservas']);
    } else {
      this.router.navigate(['/ver-reservas-user']);
    }
  }
}
