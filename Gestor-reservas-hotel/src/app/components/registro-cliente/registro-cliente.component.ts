import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { ClienteService } from 'src/app/services/RegistroCliente/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/models/Cliente';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css'],
})
export class RegistroClienteComponent implements OnInit {
  isAdmin: boolean = false;
  FormCliente!: FormGroup;
  constructor(
    private service: ClienteService,
    private notificaciones: NotificacionesService,
    private router: Router,
    private authservice: LoginService
  ) {
    const userInfo = this.authservice.getUserInfo();
    this.isAdmin = userInfo.nivel;
  }
  ngOnInit(): void {
    this.initForrm();
  }

  public NuevoCliente?: Cliente;

  textToBoolean(text: string) {
    switch (text) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return false;
    }
  }

  MostrarNotificacion(message: string, color: string) {
    this.notificaciones.showNotification(message, color);
  }

  initForrm() {
    this.FormCliente = new FormGroup({
      idCliente: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      tipoDocumento: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      telefono: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', Validators.required),
      nivel: new FormControl(false, Validators.required),
    });
  }

  public RegistrarCliente() {
    this.NuevoCliente = {
      idCliente: this.FormCliente.get('idCliente')!.value,
      tipoDocumento: this.FormCliente.get('tipoDocumento')!.value,
      nombre: this.FormCliente.get('nombre')!.value,
      telefono: this.FormCliente.get('telefono')!.value,
      correo: this.FormCliente.get('correo')!.value,
      contrasena: this.FormCliente.get('contrasena')!.value,
      nivel: this.FormCliente.get('nivel')!.value,
    };

    const booleanLevel = this.textToBoolean(this.NuevoCliente.nivel);
    this.NuevoCliente.nivel = booleanLevel;

    this.service.RegistrarCliente(this.NuevoCliente).subscribe(
      (data) => {
        console.log(data),
          this.MostrarNotificacion('Registro exitoso', 'green');
        if (this.isAdmin) {
          this.router.navigate(['/consulta-clientes']);
        } else this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error', error);
        if (error.error && error.error.message) {
          this.MostrarNotificacion(error.error.message, 'red');
        } else {
          this.MostrarNotificacion('Ocurrio algo inesperado', 'red');
        }
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    );
    this.FormCliente.reset();
  }
}
