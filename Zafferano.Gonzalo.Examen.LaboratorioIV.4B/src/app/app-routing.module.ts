import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesGuard } from './guards/detalles.guard';
import { SalenPizzasGuard } from './guards/salen-pizzas.guard';
import { LoginGuard } from './guards/login.guard';
import { RegistroGuard } from './guards/registro.guard';
import { AltasGuard } from './guards/altas.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), canActivate: [LoginGuard] }, 
  { path: 'bienvenido', loadChildren: () => import('./bienvenido/bienvenido.module').then(m => m.BienvenidoModule) },
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule), canActivate: [RegistroGuard] },
  { path: 'altas', loadChildren: () => import('./altas/altas.module').then(m => m.AltasModule),  canActivate :[AltasGuard] },
  { path: 'detalles', loadChildren: () => import('./detalles/detalles.module').then(m => m.DetallesModule), canActivate :[DetallesGuard] },
  { path: 'salenPizzas', loadChildren: () => import('./salen-pizzas/salen-pizzas.module').then(m => m.SalenPizzasModule), canActivate: [SalenPizzasGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
