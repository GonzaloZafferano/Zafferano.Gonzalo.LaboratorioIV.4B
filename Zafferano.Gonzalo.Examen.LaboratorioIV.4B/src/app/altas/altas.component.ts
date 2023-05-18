import { Component } from '@angular/core';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent {
  public paisSeleccionado : any ;

  tablaPaisesHandler(pais: any) {
    if (pais != '') {
      this.paisSeleccionado = pais;  
    }
  }
}
