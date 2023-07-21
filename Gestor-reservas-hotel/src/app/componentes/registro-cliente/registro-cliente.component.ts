import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificacionesService } from 'src/app/servicios/Notificaciones/notificaciones.service';
import { ClienteService } from 'src/app/servicios/RegistroCliente/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/models/Cliente';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css'],
})
export class RegistroClienteComponent {
  constructor(
    private service: ClienteService,
    private notificaciones: NotificacionesService,
    private router: Router
  ) {}
  NgOnInit(): void {}

  public NuevoCliente?: Cliente;
  public nivelPorDefecto: boolean = false;
  registroExitoso: boolean = false;

  MostrarNotificacion(message: string, color: string) {
    this.notificaciones.showNotification(message, color);
  }

  public FormCliente = new FormGroup({
    idCliente: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    tipoDocumento: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
    nivel: new FormControl(this.nivelPorDefecto, Validators.required),
  });

  public RegistrarCliente() {
    let cliente = {
      idCliente: this.FormCliente.get('idCliente')!.value,
      tipoDocumento: this.FormCliente.get('tipoDocumento')!.value,
      nombre: this.FormCliente.get('nombre')!.value,
      telefono: this.FormCliente.get('telefono')!.value,
      correo: this.FormCliente.get('correo')!.value,
      contrasena: this.FormCliente.get('contrasena')!.value,
      nivel: this.FormCliente.get('nivel')!.value,
    };
    this.service.RegistrarCliente(cliente).subscribe(
      (data) => {
        console.log(data),
          this.MostrarNotificacion('Registro exitoso', 'green'),
          this.router.navigate(['/login']);
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
