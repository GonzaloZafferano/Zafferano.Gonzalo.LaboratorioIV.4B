import { Injectable } from '@angular/core';
import { FirestoreDBService } from './FirestoreDB/firestore-db.service';

@Injectable({
  providedIn: 'root'
})
export class PizzasServiceService {
  nombreLista: string;
  constructor(private firestoreDB: FirestoreDBService) {
    this.nombreLista = 'pizzas';
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
}
