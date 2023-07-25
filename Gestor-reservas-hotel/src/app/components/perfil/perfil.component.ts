import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  UserInfo!: any;
  constructor(
    private authService: LoginService,
    private notficaciones: NotificacionesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.UserInfo = this.authService.getUserInfo();
  }

  editarUsuario() {
    this.router.navigate(['/editar-perfil'], {
      queryParams: { idCliente: this.UserInfo.idCliente },
    });
  }
}
