import { Component } from '@angular/core';
import { FirestoreUsuariosService } from './services/FirestoreUsuarios/firestore-usuarios.service';
import { ToastPredeterminadosService } from './services/ToastPredeterminados/toast-predeterminados.service';
import { FirestoreLoginService } from './services/FirestoreLogin/firestore-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zafferano.Gonzalo.Examen.LaboratorioIV.4B';

  constructor(private f: FirestoreUsuariosService,
    private login: FirestoreLoginService,
    private toast: ToastPredeterminadosService) {

  }

  cargar() {
    this.toast.exito('Cargo', 'titulo');
    this.f.cargarUsuarioConIdAsignado({ id: '33', nombre: 'gonzalo' });
    this.f.cargarUsuarioConIdAsignado({ id: '34', nombre: 'mariana' });
    this.f.cargarUsuarioConIdAsignado({ id: '35', nombre: 'pepe' });
  }

  modifivar() {
    this.f.modificarUsuario({ id: '99jQghXnd8k3UtEbe4ZA', nombre: 'fabian1113333333' });
  }

  async traer() {
    console.log(await this.f.obtenerListaDeUsuarios());
  }
  borrar() {
    this.toast.error('boro', 'titulo');

    this.f.eliminarUsuario('GSpTZDCUK3ypZZU7s1fG')
  }
  async traerPorId() {
    // await this.f.traerUsuarioPorId('99jQghXnd8k3UtEbe4ZA').then(x => {
    //   console.log(x);
    // });;

    await this.f.traerUsuarioPorId('34').then(x => {
      console.log(x);
    });;
  }

  log() {
    //this.login.registrarUsuario('test@test.com', '123456');
    this.login.loguearUsuario('test@test.com', '123456');
  }
}
