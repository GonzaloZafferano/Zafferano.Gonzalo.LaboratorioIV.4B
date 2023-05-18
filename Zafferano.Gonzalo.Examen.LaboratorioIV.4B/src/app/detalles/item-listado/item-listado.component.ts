import { Component, EventEmitter, Output } from '@angular/core';
import { AltasService } from 'src/app/services/altas/altas.service';

@Component({
  selector: 'app-item-listado',
  templateUrl: './item-listado.component.html',
  styleUrls: ['./item-listado.component.css']
})
export class ItemListadoComponent {
  @Output() OnItemSeleccionado = new EventEmitter<any>();
  filaSeleccionada: any;
  listado: any[] = [];
  spinner : boolean = false;
  constructor(private itemService: AltasService) { }

  ngOnInit(): void {    
    this.obtenerPeliculas();
  }

  async obtenerPeliculas() {
    this.spinner = true;    
    let peliculas = await this.itemService.obtenerListaDeItemsDB();

    this.listado = peliculas.sort((x,y)=>{
      if (x['nombre'].toLowerCase() < y['nombre'].toLowerCase()) 
        return -1;        
      if (x['nombre'].toLowerCase() > y['nombre'].toLowerCase()) 
        return 1;        
      return 0;
    }); 

    this.spinner = false;
  }

  obtenerFechaString(actor: any) {
    return this.itemService.obtenerFechaString(actor);
  }

  seleccionDeFila(itemSeleccionado: any) {
    this.filaSeleccionada = itemSeleccionado;
    this.OnItemSeleccionado.emit(itemSeleccionado);
  }
}
