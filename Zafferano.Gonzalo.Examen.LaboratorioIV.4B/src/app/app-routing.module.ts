import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesGuard } from './guards/detalles.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'bienvenido', loadChildren: () => import('./bienvenido/bienvenido.module').then(m => m.BienvenidoModule) },
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule) },
  { path: 'altas', loadChildren: () => import('./altas/altas.module').then(m => m.AltasModule),  canActivate :[DetallesGuard] },
  { path: 'detalles', loadChildren: () => import('./detalles/detalles.module').then(m => m.DetallesModule), canActivate :[DetallesGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
