import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { HotelService } from 'src/app/services/hotel/hotel.service';

@Component({
  selector: 'app-editar-hotel',
  templateUrl: './editar-hotel.component.html',
  styleUrls: ['./editar-hotel.component.css'],
})
export class EditarHotelComponent implements OnInit {
  idHotel!: any;
  NuevosDatos!: any;
  HotelForm!: FormGroup;
  constructor(
    private hotelService: HotelService,
    private notificaciones: NotificacionesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idHotel = params['idHotel'];
    });
    if (this.idHotel) this.initForm();
    this.ObtenerHotel();
  }

  initForm() {
    this.HotelForm = new FormGroup({
      idHotel: new FormControl('', [Validators.required]),
      nombre: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
    });
  }

  public ObtenerHotel() {
    this.hotelService.ObtenerHotel(this.idHotel).subscribe(
      (data) => {
        this.NuevosDatos = data;
        console.log(this.NuevosDatos);
        this.HotelForm.patchValue({
          idHotel: this.NuevosDatos.idHotel,
          nombre: this.NuevosDatos.nombre,
          telefono: this.NuevosDatos.telefono,
          correo: this.NuevosDatos.correo,
        });
        this.notificaciones.showNotification('Datos obtenidos', 'green');
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
  }

  public ActualizarHotel() {
    this.NuevosDatos = {
      idHotel: this.HotelForm.value.idHotel,
      nombre: this.HotelForm.value.nombre,
      telefono: this.HotelForm.value.telefono,
      correo: this.HotelForm.value.correo,
    };

    this.hotelService.ActualizarHotel(this.NuevosDatos, this.idHotel).subscribe(
      (data) => {
        console.log(data),
          this.notificaciones.showNotification(
            'Actualizacion exitosa',
            'green'
          );
        this.router.navigate(['/addHabitacion', this.NuevosDatos]);
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
  }
}
