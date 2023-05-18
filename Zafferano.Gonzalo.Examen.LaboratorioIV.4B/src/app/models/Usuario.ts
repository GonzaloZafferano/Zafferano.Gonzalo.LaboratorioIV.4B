export class Usuario {
    id: string;
    usuario: string;
    correo: string;
    clave: string;
    fechaRegistro: Date;
    esAdmin : boolean;

    constructor(usuario: string = '', correo: string = '', clave: string = '', fechaRegistro: Date = new Date(), esAdmin : boolean = false, id: string = '') {
        this.usuario = usuario;
        this.correo = correo;
        this.clave = clave;
        this.id = id;
        this.fechaRegistro = fechaRegistro;
        this.esAdmin = esAdmin;
    }
}