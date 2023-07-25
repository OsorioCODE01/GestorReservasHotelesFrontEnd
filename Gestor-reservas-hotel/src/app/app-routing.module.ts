import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { AdminGuard } from 'src/app/Guards/AdminGuard.guard';
import { AccesoDenegadoComponent } from './components/acceso-denegado/acceso-denegado.component';
import { AuthGuard } from './Guards/auth.guard';
import { RegistroHotelComponent } from './components/registro-hotel/registro-hotel.component';
import { NuevaReservaComponent } from './components/nueva-reserva/nueva-reserva.component';
import { ConsultaClientesComponent } from './components/consulta-clientes/consulta-clientes.component';
import { ConsultaHotelesComponent } from './components/consulta-hoteles/consulta-hoteles.component';
import { ConsultaReservasComponent } from './components/consulta-reservas/consulta-reservas.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { EditarReservaComponent } from './components/editar-reserva/editar-reserva.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { VerReservaComponent } from './components/ver-reserva/ver-reserva.component';
import { VerReservasUserComponent } from './components/ver-reservas-user/ver-reservas-user.component';
import { AddHabitacionComponent } from './components/add-habitacion/add-habitacion.component';
import { EditarHotelComponent } from './components/editar-hotel/editar-hotel.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'registro-cliente',
    component: RegistroClienteComponent,
  },
  { path: 'acceso-denegado', component: AccesoDenegadoComponent },
  {
    path: 'registro-hotel',
    component: RegistroHotelComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'nueva-reserva',
    component: NuevaReservaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'consulta-clientes',
    component: ConsultaClientesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'consulta-hoteles',
    component: ConsultaHotelesComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'consulta-reservas',
    component: ConsultaReservasComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'editar-perfil',
    component: EditarPerfilComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editar-reserva',
    component: EditarReservaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editar-hotel',
    component: EditarHotelComponent,
    canActivate: [AdminGuard],
  },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  {
    path: 'ver-reserva',
    component: VerReservaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ver-reservas-user',
    component: VerReservasUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addHabitacion',
    component: AddHabitacionComponent,
    canActivate: [AdminGuard],
  },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
