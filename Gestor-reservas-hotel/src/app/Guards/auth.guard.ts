import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginService, private router: Router) {}

  canActivate(): boolean {
    // Verifica si el usuario ha iniciado sesión utilizando el servicio de autenticación
    if (this.authService.isLoggedInUser()) {
      return true; // Permite el acceso a la ruta protegida si el usuario ha iniciado sesión
    } else {
      // Redirige al usuario a la página de inicio de sesión si no ha iniciado sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}
