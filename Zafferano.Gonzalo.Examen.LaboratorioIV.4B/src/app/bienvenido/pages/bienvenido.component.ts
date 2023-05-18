import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent {
constructor(private http: HttpClient){
}

ruta : string = '';
usuario : string = '';
urlGit : string = '';
cantidad : number = 0;

  ngOnInit(){
    //https://api.github.com/users/octaviovillegas
    this.http.get(`https://api.github.com/users/GonzaloZafferano`).subscribe(
      (data: any) => {
this.ruta = data.avatar_url;
this.usuario = data.login;
this.urlGit = data.html_url;
this.cantidad = data.public_repos;
        //imagen : data.avatar_url
        //usuario: data.login
//url del git: data.html_url



        console.log(data); // Aquí puedes trabajar con los datos obtenidos

  
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
