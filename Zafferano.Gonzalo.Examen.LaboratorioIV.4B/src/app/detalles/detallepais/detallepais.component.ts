import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detallepais',
  templateUrl: './detallepais.component.html',
  styleUrls: ['./detallepais.component.css']
})
export class DetallepaisComponent {
  @Input() spinner: boolean = false;
  @Input() anchoSpinner: string = '';
  @Input() pais : any = false;
}
