import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltasRoutingModule } from './altas-routing.module';
import { AltasComponent } from './altas.component';
import { AltaComponent } from './components/alta/alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaPaisesComponent } from './components/lista-paises/lista-paises.component';


@NgModule({
  declarations: [
    AltasComponent,
    AltaComponent,
    ListaPaisesComponent
  ],
  imports: [
    CommonModule,
    AltasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AltasModule { }
