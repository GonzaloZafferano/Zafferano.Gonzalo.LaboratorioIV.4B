import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent {
  constructor(private http: HttpClient) { }
  spinner: boolean = true;
  @Input() anchoSpinner: string = '';
  @Input() estilos: any;
  @Output() OnPaisSeleccionado = new EventEmitter<any>();
  paises: any[] = [];
  suscripcion: any;
  suscripcion2: any;
  ngOnInit() {     

    if(this.suscripcion)
    this.suscripcion.unsubscribe();

     //americas
    //region/africa;europe
    this.suscripcion = this.http.get<any[]>('https://restcountries.com/v2/region/africa?').subscribe(x => {
      this.paises = x.sort((x,y)=>{
        if (x.translations.es < y.translations.es) 
          return -1;        
        if (x.translations.es > y.translations.es) 
          return 1;        
        return 0;
      }); 
      this.spinner = false;
    });
  }

  ngOnDestroy() {
    if (this.suscripcion) {
      this.suscripcion.unsubscribe();
    }
  }

  paisSeleccionado(pais: string) {
    this.OnPaisSeleccionado.emit(pais);
  }
}
