import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesRoutingModule } from './detalles-routing.module';
import { DetallesComponent } from './detalles.component';
import { DetalleItemComponent } from './detalle-item/detalle-item.component';
import { DetallepaisComponent } from './detallepais/detallepais.component';
import { ItemListadoComponent } from './item-listado/item-listado.component';


@NgModule({
  declarations: [
    DetallesComponent,
    DetalleItemComponent,
    DetallepaisComponent,
    ItemListadoComponent
  ],
  imports: [
    CommonModule,
    DetallesRoutingModule
  ]
})
export class DetallesModule { }
