import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
  private notificationSubject = new Subject<Notification>();

  notification$ = this.notificationSubject.asObservable();

  showNotification(message: string, color: string) {
    const notification: Notification = {
      message: message,
      color: color,
    };
    this.notificationSubject.next(notification);
  }

  hideNotification() {
    this.notificationSubject.next({ message: '', color: '' });
  }
}

interface Notification {
  message: string;
  color: string;
}
