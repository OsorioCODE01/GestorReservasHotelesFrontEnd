import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificacionesService } from 'src/app/servicios/Notificaciones/notificaciones.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  message!: string;
  color!: string;
  showNotification = false;

  private notificationSubscription!: Subscription;

  constructor(private notificationService: NotificacionesService) {}

  ngOnInit() {
    this.notificationSubscription =
      this.notificationService.notification$.subscribe((notification) => {
        if (notification.message !== null) {
          this.message = notification.message;
          this.color = notification.color;
          this.showNotification = true;
          if (notification.message !== '') {
            setTimeout(() => {
              this.hideNotification();
            }, 5000);
          }
          // Ocultar la notificación después de 5 segundos
        } else {
          this.hideNotification();
        }
      });
  }

  ngOnDestroy() {
    this.notificationSubscription.unsubscribe();
  }

  hideNotification() {
    this.showNotification = false;
  }
}
