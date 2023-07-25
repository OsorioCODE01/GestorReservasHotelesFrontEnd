import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Reserva } from 'src/models/Reserva';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  constructor(private http: HttpClient) {}

  public RegistrarReserva(reserva: Reserva) {
    return this.http
      .post('http://localhost:8080/apiReserva/crearReserva', reserva)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ObtenerReservas() {
    return this.http
      .get('http://localhost:8080/apiReserva/obtenerReservas')
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ObtenerReserva(idReserva: any) {
    return this.http
      .get(
        'http://localhost:8080/apiReserva/obtenerReserva?idReserva=' + idReserva
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ObtenerReservasPorCliente(idCliente: any) {
    return this.http
      .get(
        'http://localhost:8080/apiReserva/obtenerReservasPorCliente?idCliente=' +
          idCliente
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ObtenerReservasPorHotel(idHotel: any) {
    return this.http
      .get(
        'http://localhost:8080/apiReserva/obtenerReservasPorHotel?idHotel=' +
          idHotel
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ObtenerReservaPorHotelyCliente(idHotel: any, idCliente: any) {
    return this.http
      .get(
        'http://localhost:8080/apiReserva/ObtenerReservaPorHotelyCliente?idCliente=' +
          idCliente +
          '&idHotel=' +
          idHotel
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public AgregarClienteAReserva(
    idReserva: any,
    tipo: 1,
    idCliente: any,
    reserva: Reserva
  ) {
    return this.http
      .put(
        'http://localhost:8080/apiReserva/editarReserva?idReserva=' +
          idReserva +
          '&tipo=' +
          tipo +
          '&idObjeto=' +
          idCliente,
        reserva
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public QuitarClienteDeReserva(
    idReserva: any,
    tipo: 2,
    idCliente: any,
    reserva: Reserva
  ) {
    return this.http
      .put(
        'http://localhost:8080/apiReserva/editarReserva?idReserva=' +
          idReserva +
          '&tipo=' +
          tipo +
          '&idObjeto=' +
          idCliente,
        reserva
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public AñadirHabitacionDeReserva(
    idReserva: any,
    tipo: 3,
    idHabitacion: any,
    reserva: Reserva
  ) {
    return this.http
      .put(
        'http://localhost:8080/apiReserva/editarReserva?idReserva=' +
          idReserva +
          '&tipo=' +
          tipo +
          '&idObjeto=' +
          idHabitacion,
        reserva
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public QuitarHabitacionDeReserva(
    idReserva: any,
    tipo: 4,
    idHabitacion: any,
    reserva: Reserva
  ) {
    return this.http
      .put(
        'http://localhost:8080/apiReserva/editarReserva?idReserva=' +
          idReserva +
          '&tipo=' +
          tipo +
          '&idObjeto=' +
          idHabitacion,
        reserva
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }
  public EditarInfoReserva(
    idReserva: any,
    tipo: 0,
    idObjeto: 0,
    reserva: Reserva
  ) {
    return this.http
      .put(
        'http://localhost:8080/apiReserva/editarReserva?idReserva=' +
          idReserva +
          '&tipo=' +
          tipo +
          '&idObjeto=' +
          idObjeto,
        reserva
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public EliminarReserva(idReserva: any) {
    return this.http
      .delete(
        'http://localhost:8080/apiReserva/borrarReserva?idReserva=' + idReserva
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
