import { Injectable } from '@angular/core';
import { TipoIgualdad } from 'src/app/enums/TipoIgualdad';
import { FirestoreDBService } from '../FirestoreDB/firestore-db.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreUsuariosService {
  private nombreColeccion: string = 'usuarios';

  constructor(private firestoreDB: FirestoreDBService) {
  }

  cargarUsuarioConIdAsignado(usuario: any) {
    return this.firestoreDB.guardarObjetoConIdAsignado(this.nombreColeccion, { ...usuario });
  }

  async traerUsuarioPorId(idUsuario: string) {
    let usuarios = await this.firestoreDB.traerListaDeObjetosFiltrada(this.nombreColeccion, 'id', idUsuario, TipoIgualdad.igual);  
    if (usuarios && usuarios.length > 0)
      return usuarios[0];
    return null;
  }

  obtenerListaDeUsuarios() {
    return this.firestoreDB.traerListaDeObjetos(this.nombreColeccion);
  }

  obtenerListadoDeUsuariosObservable() {
    return this.firestoreDB.traerListaDeObjetosConObservable(this.nombreColeccion);
  }

  modificarUsuario(usuario: any) {
    return this.firestoreDB.modificarObjeto(this.nombreColeccion, usuario);
  }

  eliminarUsuario(id: string) {
    return this.firestoreDB.eliminarObjeto(this.nombreColeccion, id);
  }

  traerListaDeCorreosFiltradaConObservable(correoElectronico: string) {
    return this.firestoreDB.traerListaDeObjetosFiltradaConObservable(this.nombreColeccion, 'correo', correoElectronico, TipoIgualdad.igual);
  }

  traerListaDeUsuariosFiltradaConObservable(nombreUsuario: string) {
    return this.firestoreDB.traerListaDeObjetosFiltradaConObservable(this.nombreColeccion, 'usuario', nombreUsuario, TipoIgualdad.igual);
  }

  traerListaDeCorreosFiltrada(correoElectronico: string) {
    return this.firestoreDB.traerListaDeObjetosFiltrada(this.nombreColeccion, 'correo', correoElectronico, TipoIgualdad.igual);
  }
}
