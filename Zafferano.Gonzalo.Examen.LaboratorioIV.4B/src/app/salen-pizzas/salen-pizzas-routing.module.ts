import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalenPizzasComponent } from './salen-pizzas.component';

const routes: Routes = [{ path: '', component: SalenPizzasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalenPizzasRoutingModule { }
