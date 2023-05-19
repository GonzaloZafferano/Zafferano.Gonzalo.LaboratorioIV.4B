import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreLoginService } from '../services/FirestoreLogin/firestore-login.service';
import { FirestoreUsuariosService } from '../services/FirestoreUsuarios/firestore-usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class DetallesGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private firestoreLogin: FirestoreLoginService, private route: Router, private usuarioService :FirestoreUsuariosService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.firestoreLogin.getUsuarioActualBasico)
      return true;
    else
      this.route.navigate(['login']);
    return false;

  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
