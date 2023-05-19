import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalenPizzasRoutingModule } from './salen-pizzas-routing.module';
import { SalenPizzasComponent } from './salen-pizzas.component';
import { AltaComponent } from './components/alta/alta.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaPizzasComponent } from './components/lista-pizzas/lista-pizzas.component';



@NgModule({
  declarations: [
    SalenPizzasComponent,
    AltaComponent,
    ModificarComponent,
    BorrarComponent,
    ListaPizzasComponent
  ],
  imports: [
    CommonModule,
    SalenPizzasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalenPizzasModule { }
