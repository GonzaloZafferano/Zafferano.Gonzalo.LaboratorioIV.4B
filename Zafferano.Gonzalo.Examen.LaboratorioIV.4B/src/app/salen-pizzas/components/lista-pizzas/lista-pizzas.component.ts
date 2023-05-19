import { Component, EventEmitter, Output } from '@angular/core';
import { Pizza } from 'src/app/models/Pizza';
import { PizzasServiceService } from 'src/app/services/pizzas-service.service';

@Component({
  selector: 'app-lista-pizzas',
  templateUrl: './lista-pizzas.component.html',
  styleUrls: ['./lista-pizzas.component.css']
})
export class ListaPizzasComponent { 
  listado: any[] = [];
  spinner: boolean = false;
  suscripcion: any;
  @Output() OnItemSeleccionado = new EventEmitter<any>();
  filaSeleccionada : any;

  constructor(private pizzasService: PizzasServiceService) { }

  ngOnInit(): void {
    this.obtenerPizzas();
  
  
  }

  async obtenerPizzas() {
    this.spinner = true;

    if (this.suscripcion)
      this.suscripcion.unsubscribe();

    this.suscripcion = (await this.pizzasService.obtenerListadoDeItemsObservableDB()).subscribe(x =>{  
      this.listado = x.sort((x, y) => {
        if (x['nombre'].toLowerCase() < y['nombre'].toLowerCase())
          return -1;
        if (x['nombre'].toLowerCase() > y['nombre'].toLowerCase())
          return 1;
        return 0;
      });
      this.spinner = false;
    });    
  }

  seleccionDeFila(itemSeleccionado: any) {
    this.filaSeleccionada = itemSeleccionado;
    this.OnItemSeleccionado.emit(itemSeleccionado);
  }
}
