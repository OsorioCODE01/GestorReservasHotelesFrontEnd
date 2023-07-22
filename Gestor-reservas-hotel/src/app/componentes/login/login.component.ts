import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/servicios/Notificaciones/notificaciones.service';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hidePassword = true;
  userInfo: any = {};

  constructor(
    private authService: LoginService,
    private router: Router,
    private notificaciones: NotificacionesService
  ) {}

  public FormLogin = new FormGroup({
    idCliente: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', Validators.required),
  });

  async loginSubmit() {
    let idCliente = this.FormLogin.get('idCliente')!.value;
    let contrasena = this.FormLogin.get('contrasena')!.value;

    try {
      await this.authService.login(idCliente, contrasena);
      const isLoggedIn = this.authService.isLoggedInUser();

      if (isLoggedIn) {
        this.userInfo = this.authService.getUserInfo();

        this.router.navigate(['/inicio']);

        this.notificaciones.showNotification(
          '¡Bienvenido ' + this.userInfo.nombre + '!',
          'green'
        );
      } else {
        this.notificaciones.showNotification(
          'Error en el inicio de sesión',
          'red'
        );
      }
    } catch (error) {
      this.notificaciones.showNotification(
        'Error en el inicio de sesión desde el servicio',
        'red'
      );
      console.error('Error al iniciar sesión:', error);
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
