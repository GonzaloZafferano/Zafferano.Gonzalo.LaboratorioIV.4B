import { Injectable } from '@angular/core';
import { FirestoreDBService } from '../FirestoreDB/firestore-db.service';

@Injectable({
  providedIn: 'root'
})
export class AltasService {
  nombreLista: string;
  constructor(private firestoreDB: FirestoreDBService) {
    this.nombreLista = 'items';
  }

  cargarItemDB(item: any) {
    return this.firestoreDB.guardarObjetoSinIdAsignado(this.nombreLista, {... item});
  }

  obtenerListaDeItemsDB() {
    return this.firestoreDB.traerListaDeObjetos(this.nombreLista);
  }

  obtenerListadoDeItemsObservableDB() {
    return this.firestoreDB.traerListaDeObjetosConObservable(this.nombreLista);
  }

  modificarItemDB(item: any) {
    return this.firestoreDB.modificarObjeto(this.nombreLista, item);
  }

  eliminarItemDB(id: string) {
    return this.firestoreDB.eliminarObjeto(this.nombreLista, id);
  }
  
  obtenerFechaString(item: any, aaaaMMdd: boolean = false) {
    let fecha = item.fechaNacimiento.toDate();// new Date(pelicula.fechaDeEstreno);
  
    let dia = fecha.getDate() + 1;
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();

    let cadenaDia = dia < 10 ? '0' + dia.toString() : dia.toString();
    let cadenaMes = mes < 10 ? '0' + mes.toString() : mes.toString();

    if (aaaaMMdd)
      return anio.toString() + '-' + cadenaMes + '-' + cadenaDia;

    return cadenaDia + '-' + cadenaMes + '-' + anio.toString();
  }
}
