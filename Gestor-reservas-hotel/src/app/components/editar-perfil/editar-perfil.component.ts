import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { ClienteService } from 'src/app/services/RegistroCliente/cliente.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent {
  idCliente!: any;
  clienteInfo: any = {};
  clienteForm!: any;
  isAdmin: boolean = false;
  showPassword = false;
  constructor(
    private route: ActivatedRoute,
    private clieenteService: ClienteService,
    private notification: NotificacionesService,
    private router: Router,
    private authService: LoginService
  ) {
    const userInfo = this.authService.getUserInfo();
    this.isAdmin = userInfo.nivel;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.idCliente = params['idCliente'];
    });
    this.obtenerCliente();
    this.initForm();
  }

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

  initForm() {
    this.clienteForm = new FormGroup({
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

  obtenerCliente() {
    this.clieenteService.ObtenerCliente(this.idCliente).subscribe(
      (res) => {
        this.clienteInfo = res;
        this.clienteForm.patchValue({
          idCliente: this.clienteInfo.idCliente,
          tipoDocumento: this.clienteInfo.tipoDocumento,
          nombre: this.clienteInfo.nombre,
          telefono: this.clienteInfo.telefono,
          correo: this.clienteInfo.correo,
          contrasena: this.clienteInfo.contrasena,
        });
        this.clienteForm.get('nivel')?.setValue(this.clienteInfo.nivel);
        console.log(this.clienteInfo);
        this.notification.showNotification('Consulta Exitosa', 'green');
      },
      (err) => {
        console.error('Error', err);
        if (err.error && err.error.message) {
          this.notification.showNotification(err.error.message, 'red');
        }
      }
    );
  }

  actualizarCliente() {
    this.clienteInfo = {
      idCliente: this.clienteForm.value.idCliente,
      tipoDocumento: this.clienteForm.value.tipoDocumento,
      nombre: this.clienteForm.value.nombre,
      telefono: this.clienteForm.value.telefono,
      correo: this.clienteForm.value.correo,
      contrasena: this.clienteForm.value.contrasena,
    };

    const nivelBoolean = this.textToBoolean(this.clienteForm.value.nivel);
    this.clienteInfo.nivel = nivelBoolean;

    this.clieenteService
      .ActualizarCliente(this.clienteInfo, this.idCliente)
      .subscribe(
        (res) => {
          console.log(res);
          this.notification.showNotification('Actualización Exitosa', 'green');
        },
        (err) => {
          console.error('Error', err);
          if (err.error && err.error.message) {
            this.notification.showNotification(err.error.message, 'red');
          }
        }
      );
  }

  Regresar() {
    if (this.isAdmin) {
      this.router.navigate(['/consulta-clientes']);
    } else {
      this.router.navigate(['/perfil']);
    }
  }
}
