import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AccesoDenegadoComponent } from './components/acceso-denegado/acceso-denegado.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConsultaHotelesComponent } from './components/consulta-hoteles/consulta-hoteles.component';
import { ConsultaClientesComponent } from './components/consulta-clientes/consulta-clientes.component';
import { ConsultaReservasComponent } from './components/consulta-reservas/consulta-reservas.component';
import { NuevaReservaComponent } from './components/nueva-reserva/nueva-reserva.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { VerReservaComponent } from './components/ver-reserva/ver-reserva.component';
import { VerReservasUserComponent } from './components/ver-reservas-user/ver-reservas-user.component';
import { EditarReservaComponent } from './components/editar-reserva/editar-reserva.component';
import { RegistroHotelComponent } from './components/registro-hotel/registro-hotel.component';
import { AddHabitacionComponent } from './components/add-habitacion/add-habitacion.component';
import { EditarHotelComponent } from './components/editar-hotel/editar-hotel.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    RegistroClienteComponent,
    NotificationComponent,
    AccesoDenegadoComponent,
    NavBarComponent,
    ConsultaHotelesComponent,
    ConsultaClientesComponent,
    ConsultaReservasComponent,
    NuevaReservaComponent,
    PerfilComponent,
    EditarPerfilComponent,
    VerReservaComponent,
    VerReservasUserComponent,
    EditarReservaComponent,
    RegistroHotelComponent,
    AddHabitacionComponent,
    EditarHotelComponent,
    ContactoComponent,
  ],
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
