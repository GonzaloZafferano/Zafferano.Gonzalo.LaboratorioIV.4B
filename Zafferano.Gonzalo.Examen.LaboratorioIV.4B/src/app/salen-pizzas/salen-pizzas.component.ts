import { Component } from '@angular/core';

@Component({
  selector: 'app-salen-pizzas',
  templateUrl: './salen-pizzas.component.html',
  styleUrls: ['./salen-pizzas.component.css']
})
export class SalenPizzasComponent {
  pizza: any;

  pizzaSeleccionda(pizza : any){
    this.pizza = pizza;
  }

  limpiar(){
    this.pizza = null;
  }
}
