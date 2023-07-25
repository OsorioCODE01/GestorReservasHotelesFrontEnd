import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: LoginService, private router: Router) {}

  canActivate(): boolean {
    // Verifica si el usuario ha iniciado sesión utilizando el servicio de autenticación
    if (this.authService.isLoggedInUser()) {
      const userInfo = this.authService.getUserInfo();
      if (userInfo.nivel) {
        return true; // Permite el acceso a la ruta protegida si el usuario tiene nivel=true
      } else {
        // Si no es administrador, redirigir a otra página o mostrar mensaje de acceso denegado
        this.router.navigate(['/acceso-denegado']);
        return false;
      }
    } else {
      // Redirige al usuario a la página de inicio de sesión si no ha iniciado sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}
