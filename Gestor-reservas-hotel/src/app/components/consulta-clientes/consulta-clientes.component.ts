import { Component } from '@angular/core';
import { NotificacionesService } from 'src/app/services/Notificaciones/notificaciones.service';
import { ClienteService } from 'src/app/services/RegistroCliente/cliente.service';

@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.component.html',
  styleUrls: ['./consulta-clientes.component.css'],
})
export class ConsultaClientesComponent {
  public clientes: any = [];

  constructor(
    private clienteService: ClienteService,
    private notificacion: NotificacionesService
  ) {}
  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteService.ObtenerClientes().subscribe(
      (res) => {
        this.clientes = res;
        console.log(this.clientes);
        this.notificacion.showNotification('Consulta Exitosa', 'green');
      },
      (err) => {
        console.error('Error', err);
        if (err.error && err.error.message) {
          this.notificacion.showNotification(err.error.message, 'red');
        }
      }
    );
  }

  eliminarCliente(idCliente: any) {
    this.clienteService.BorrarCliente(idCliente).subscribe(
      (res) => {
        console.log(res);
        this.notificacion.showNotification('Cliente eliminado', 'green');
        this.obtenerClientes();
      },
      (err) => {
        console.error('Error', err);
        if (err.error && err.error.message) {
          this.notificacion.showNotification(err.error.message, 'red');
        }
      }
    );
  }
}
