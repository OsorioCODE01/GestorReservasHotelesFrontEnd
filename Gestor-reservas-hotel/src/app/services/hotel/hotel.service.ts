import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Habitacion } from 'src/models/Habitacion';
import { Hotel } from 'src/models/Hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}

  public RegistrarHotel(hotel: Hotel) {
    return this.http
      .post('http://localhost:8080/apiHotel/crearHotel', hotel)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ObtenerHotel(idHotel: any) {
    return this.http
      .get('http://localhost:8080/apiHotel/obtenerHotel?idHotel=' + idHotel)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ObtenerHoteles() {
    return this.http.get('http://localhost:8080/apiHotel/obtenerHoteles').pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  public ActualizarHotel(hotel: Hotel, idHotel: any) {
    return this.http
      .put(
        'http://localhost:8080/apiHotel/editarHotel?idHotel=' + idHotel,
        hotel
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public BorrarHotel(idHotel: any) {
    return this.http
      .delete('http://localhost:8080/apiHotel/borrarHotel?idHotel=' + idHotel)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  //Metodos para Habitaciones

  public CrearHabitacion(habitacion: Habitacion) {
    return this.http
      .post('http://localhost:8080/apiHabitacion/crearHabitacion', habitacion)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ObtenerHabitacionesPorHotel(idHotel: any) {
    return this.http
      .get(
        'http://localhost:8080/apiHabitacion/habitacionesPorHotel?idHotel=' +
          idHotel
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ObtenerTodasLasHabtiaciones() {
    return this.http
      .get('http://localhost:8080/apiHabitacion/allHabitaciones')
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public ActualizarHabitacion(habitacion: Habitacion, idHabitacion: any) {
    return this.http
      .put(
        'http://localhost:8080/apiHabitacion/editarHabtiacion?idHabitacion=' +
          idHabitacion,
        habitacion
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public EliminarHabitacion(idHabitacion: any) {
    return this.http
      .delete(
        'http://localhost:8080/apiHabitacion/borrarHabitacion?idHabitacion=' +
          idHabitacion
      )
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
