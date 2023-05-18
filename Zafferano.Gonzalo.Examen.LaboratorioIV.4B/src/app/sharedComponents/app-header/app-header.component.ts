import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreLoginService } from 'src/app/services/FirestoreLogin/firestore-login.service';
import { LocalStorageService } from 'src/app/services/LocalStorage/local-storage.service';
import { ToastPredeterminadosService } from 'src/app/services/ToastPredeterminados/toast-predeterminados.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  private suscripcion: any;
  public usuarioEstaLogueado: boolean = false;

  constructor(private router: Router, private firestoreLogin: FirestoreLoginService,
    private localStorage : LocalStorageService,
    private toast: ToastPredeterminadosService) {
  }

  ngOnInit() {  
  }
 
  ngOnDestroy() {
    if (this.suscripcion)
      this.suscripcion.unsubscribe();
  }

  desloguear() {
    this.firestoreLogin.desloguear();
    this.toast.exito('Sesión cerrada con exito.', ' ');
    this.router.navigate(['../login']);
  }

  verificarEstadoDeUsuario() {
    return this.firestoreLogin.getUsuarioEstaLogueado;
  }
}
