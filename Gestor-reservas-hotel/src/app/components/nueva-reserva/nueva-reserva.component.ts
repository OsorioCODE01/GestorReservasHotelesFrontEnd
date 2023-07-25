import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ReservaService } from 'src/app/services/resevas/reserva.service';
import { Cliente } from 'src/models/Cliente';
import { Hotel } from 'src/models/Hotel';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css'],
})
export class NuevaReservaComponent implements OnInit {
  ClienteInfo!: any;
  HotelInfo!: any;
  HotelesDisponibles!: any;
  ReservaInfo: any = {};
  ReservaForm!: any;
  constructor(
    private reservaService: ReservaService,
    private router: Router,
    private notificacion: NotificacionesService,
    private authService: LoginService,
    private hotelService: HotelService
  ) {
    this.ClienteInfo = this.authService.getUserInfo();
    this.obtenerHotelesDisponibles();
  }
  ngOnInit(): void {
    if (this.ClienteInfo) this.initForm();
  }

  initForm() {
    this.ReservaForm = new FormGroup({
      idCliente: new FormControl(this.ClienteInfo, Validators.required),
      idHotel: new FormControl(Hotel, Validators.required),
      fechaInicio: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
    });
  }

  obtenerHotelesDisponibles() {
    this.hotelService.ObtenerHoteles().subscribe(
      (res) => {
        this.HotelesDisponibles = res;
      },
      (err) => {
        console.error('Error', err);
        if (err.error && err.error.message) {
          this.notificacion.showNotification(err.error.message, 'red');
        } else {
          this.notificacion.showNotification('Error en el servidor', 'red');
        }
      }
    );
  }

  RegistrarReserva() {
    this.ReservaInfo = {
      idCliente: this.ReservaForm.get('idCliente')!.value,
      idHotel: this.ReservaForm.get('idHotel')!.value,
      fechaInicio: this.ReservaForm.get('fechaInicio')!.value,
      fechaFin: this.ReservaForm.get('fechaFin')!.value,
    };

    this.reservaService.RegistrarReserva(this.ReservaInfo).subscribe(
      (data) => {
        console.log(data);
        this.notificacion.showNotification('Registro exitoso', 'green');
        this.router.navigate(['/editar-reserva'], {
          queryParams: {
            idCliente: this.ClienteInfo.idCliente,
            idHotel: this.ReservaInfo.idHotel.idHotel,
          },
        });
      },
      (err) => {
        console.error('Error', err);
        if (err.error && err.error.message) {
          this.notificacion.showNotification(err.error.message, 'red');
        } else {
          this.notificacion.showNotification('Error en el servidor', 'red');
        }
      }
    );
  }
}
