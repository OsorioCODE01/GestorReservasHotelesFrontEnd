import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroClienteComponent } from './componentes/registro-cliente/registro-cliente.component';
import { AdminGuard } from 'src/app/Guards/AdminGuard.guard';
import { AccesoDenegadoComponent } from './componentes/acceso-denegado/acceso-denegado.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'registro-cliente',
    component: RegistroClienteComponent,
  },
  { path: 'acceso-denegado', component: AccesoDenegadoComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
