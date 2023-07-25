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

  public ObtenerCliente(idCliente: any) {
    return this.http
      .get(
        'http://localhost:8080/apiCliente/obtenerCliente?idCliente=' + idCliente
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ObtenerClientes() {
    return this.http
      .get('http://localhost:8080/apiCliente/obtenerClientes')
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ActualizarCliente(cliente: Cliente, idCliente: any) {
    return this.http
      .put(
        'http://localhost:8080/apiCliente/editarCliente?idCliente=' + idCliente,
        cliente
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public BorrarCliente(idCliente: any) {
    return this.http
      .delete(
        'http://localhost:8080/apiCliente/eliminarCliente?idCliente=' +
          idCliente
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
