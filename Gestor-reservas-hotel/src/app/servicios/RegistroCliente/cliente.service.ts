import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Cliente } from 'src/models/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  public RegistrarCliente(cliente: Cliente) {
    return this.http
      .post('http://localhost:8080/apiCliente/crearCliente', cliente)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
