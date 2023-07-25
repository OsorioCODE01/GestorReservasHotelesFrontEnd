import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { Habitacion } from 'src/models/Habitacion';

@Component({
  selector: 'app-add-habitacion',
  templateUrl: './add-habitacion.component.html',
  styleUrls: ['./add-habitacion.component.css'],
})
export class AddHabitacionComponent {
  NuevoHotel!: any;
  HotelInfo!: any;
  statusDefault: boolean = false;
  NuevaHabitacion!: Habitacion;
  constructor(
    private route: ActivatedRoute,
    private Router: Router,
    private hotelService: HotelService,
    private notifiaciones: NotificacionesService
  ) {}

  // Me traje el hotel completo desde el registro de hotel JIJIJI
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.NuevoHotel = params;
      console.log(this.NuevoHotel);
      if (this.NuevoHotel) this.iniciarFormulari();
    });
    this.consultarHotel();
  }
  public iniciarFormulari() {
    //Esto resulto necesario para incializar el formualrio con la iformacion del hotel.
    this.FormHabitacion = new FormGroup({
      numHabitacion: new FormControl('', [Validators.required]),
      idhotel: new FormControl(this.NuevoHotel, Validators.required),
      status: new FormControl(this.statusDefault, Validators.required),
    });
  }

  public FormHabitacion = new FormGroup({
    numHabitacion: new FormControl('', [Validators.required]),
    idhotel: new FormControl(this.NuevoHotel, Validators.required),
    status: new FormControl(this.statusDefault, Validators.required),
  });

  public consultarHotel() {
    this.hotelService.ObtenerHotel(this.NuevoHotel.idHotel).subscribe(
      (data) => {
        this.HotelInfo = data;
        console.log(this.HotelInfo);
      },
      (error) => {
        console.error('Error', error);
        if (error.error && error.error.message) {
          this.notifiaciones.showNotification(error.error.message, 'red');
        } else {
          this.notifiaciones.showNotification('Error en el servidor', 'red');
        }
      }
    );
  }

  public AddHabitacion() {
    this.NuevaHabitacion = {
      numHabitacion: this.FormHabitacion.get('numHabitacion')!.value,
      idHotel: this.FormHabitacion.get('idhotel')!.value,
      status: this.FormHabitacion.get('status')!.value,
    };
    this.hotelService.CrearHabitacion(this.NuevaHabitacion).subscribe(
      (data) => {
        console.log(data),
          this.notifiaciones.showNotification('Registro exitoso', 'green');
        this.consultarHotel();
        this.iniciarFormulari();
      },
      (error) => {
        this.consultarHotel();
        this.iniciarFormulari();
        console.error('Error', error);
        if (error.error && error.error.message) {
          this.notifiaciones.showNotification(error.error.message, 'red');
        } else {
          this.notifiaciones.showNotification('Error en el servidor', 'red');
        }
      }
    );
    this.FormHabitacion.reset();
  }

  public EliminarHabitacion(idHabitacion: any) {
    this.hotelService.EliminarHabitacion(idHabitacion).subscribe(
      (data) => {
        console.log(data),
          this.notifiaciones.showNotification('Habitacion borrada', 'orange');
        this.consultarHotel();
        this.iniciarFormulari();
      },
      (error) => {
        this.consultarHotel();
        this.iniciarFormulari();
        console.error('Error', error);
        if (error.error && error.error.message) {
          this.notifiaciones.showNotification(error.error.message, 'red');
        } else {
          this.notifiaciones.showNotification('Error en el servidor', 'red');
        }
      }
    );
    this.FormHabitacion.reset();
  }

  public EditarHotel(idHotel: any) {
    this.Router.navigate(['/editar-hotel'], {
      queryParams: { idHotel: this.NuevoHotel.idHotel },
    });
  }
}
