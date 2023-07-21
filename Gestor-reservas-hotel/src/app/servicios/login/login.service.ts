import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  private isUserAuthenticated = false;
  private hasUserAdminRole = false;

  login(idCliente: Number, contrasena: String): boolean {
    return false;
  }
}
