import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasComponent } from './altas.component';

const routes: Routes = [{ path: '', component: AltasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltasRoutingModule { }
