import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedInUser();
    this.isAdmin = this.loginService.getUserInfo()?.nivel || false;

    this.loginService.loginStatusChanged.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      this.isAdmin = this.loginService.getUserInfo()?.nivel || false;
    });
  }

  onLogout(): void {
    this.loginService.logout();
    this.isAdmin = false;
  }
}
