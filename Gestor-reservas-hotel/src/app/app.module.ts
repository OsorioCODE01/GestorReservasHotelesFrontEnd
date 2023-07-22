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

import { LoginComponent } from './componentes/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroClienteComponent } from './componentes/registro-cliente/registro-cliente.component';
import { NotificationComponent } from './componentes/notification/notification.component';
import { AccesoDenegadoComponent } from './componentes/acceso-denegado/acceso-denegado.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ConsultaHotelesComponent } from './componentes/consulta-hoteles/consulta-hoteles.component';
import { ConsultaClientesComponent } from './componentes/consulta-clientes/consulta-clientes.component';
import { ConsultaReservasComponent } from './componentes/consulta-reservas/consulta-reservas.component';
import { NuevaReservaComponent } from './componentes/nueva-reserva/nueva-reserva.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { VerReservaComponent } from './componentes/ver-reserva/ver-reserva.component';
import { VerReservasUserComponent } from './componentes/ver-reservas-user/ver-reservas-user.component';
import { EditarReservaComponent } from './componentes/editar-reserva/editar-reserva.component';

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
