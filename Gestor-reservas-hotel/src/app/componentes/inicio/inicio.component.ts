import { Component } from '@angular/core';
import { NotificacionesService } from 'src/app/servicios/Notificaciones/notificaciones.service';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  isAdmin: boolean = false;

  constructor(
    private authService: LoginService,
    private notificaciones: NotificacionesService
  ) {
    const userInfo = this.authService.getUserInfo();
    this.isAdmin = userInfo.nivel;
  }

  logout(): void {
    this.authService.logout();
    this.notificaciones.showNotification('Cierre de sesión exitoso', 'green');
  }
}
