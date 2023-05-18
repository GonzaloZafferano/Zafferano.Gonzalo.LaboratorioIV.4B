import { Component } from '@angular/core';
import { AltasService } from '../services/altas/altas.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  spinners: boolean = false;
  item: any;
  pais: any;
  items: any[] | undefined;

  constructor(private itemService : AltasService){}

  async itemSeleccionado(item: any) {
    this.spinners = true;

    //Paso el actor para los detalles de el mismo
    this.item = item;

    //Obtengo los nombres de las peliculas
    //let items = await this.itemService.obtenerListaDeItemsDB();


    // = items.filter(x => x['actor'].id == item.id);
    //this.items = items as any;

    //Detalles pais
    this.pais = item.pais;

    this.spinners = false;
  }
}
