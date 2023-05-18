import { Component, Input } from '@angular/core';
import { FormateoService } from 'src/app/services/formateo/formateo.service';

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.css']
})
export class DetalleItemComponent {
  @Input() spinner: boolean = false;
  @Input() anchoSpinner: string = '';
  @Input() item: any | undefined | null;

  constructor(private formateo: FormateoService) { }

  obtenerFechaString(fecha: any) {
    return this.formateo.obtenerFechaString(fecha);
  }
}
