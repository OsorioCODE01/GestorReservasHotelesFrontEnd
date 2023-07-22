import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificacionesService } from '../Notificaciones/notificaciones.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private notificaiones: NotificacionesService
  ) {}
  private isLoggedIn = false;
  private userInfo: any = {};

  // Define el Subject
  private loginStatusSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  // Crea un observable a partir del Subject para que otros componentes puedan suscribirse
  public loginStatusChanged: Observable<boolean> =
    this.loginStatusSubject.asObservable();

  login(idCliente: any, contrasena: any): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http
        .get(
          'http://localhost:8080/apiCliente/obtenerCliente?idCliente=' +
            idCliente
        )
        .subscribe(
          (data) => {
            this.userInfo = data;
            if (
              this.userInfo.contrasena === contrasena &&
              this.userInfo.idCliente === idCliente
            ) {
              this.isLoggedIn = true;
              this.loginStatusSubject.next(this.isLoggedIn);
              resolve(true);
            } else {
              this.isLoggedIn = false;
              resolve(false);
            }
          },
          (error) => {
            // Manejo de errores aquí, si es necesario
            console.error(
              'Error al obtener la información del cliente:',
              error
            );
            reject(error);
          }
        );
    });
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  getUserInfo(): any {
    return this.userInfo;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loginStatusSubject.next(this.isLoggedIn);
    this.notificaiones.showNotification(
      '!Hasta luego ' + this.userInfo.nombre + '!',
      'red'
    );
    this.userInfo = {};
  }
}
