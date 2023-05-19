import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PizzasServiceService } from 'src/app/services/pizzas-service.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent {
  constructor(private pizzaService : PizzasServiceService){}
  @Output() OnPizzaEliminada = new EventEmitter<any>();

  @Input() pizzaCargada: any;

  borrarPizza(){
    if(this.pizzaCargada){
this.pizzaService.eliminarItemDB(this.pizzaCargada.id);
this.pizzaCargada = undefined;
this.OnPizzaEliminada.emit(true);
    }
  }
}
