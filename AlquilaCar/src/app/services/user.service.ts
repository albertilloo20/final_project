import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Usuario} from '../interfaces/usuario';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  URLUsuarios = 'https://alquilacar-a9f10.firebaseio.com/usuarios.json';

  constructor(private httpClient: HttpClient) { }

  guardarUsuario(usuario: Usuario) {
    let body = usuario;
    return this.httpClient.post( this.URLUsuarios, body ).subscribe();
  }

  getAllUsers() {
    return this.httpClient.get(this.URLUsuarios).pipe(map(res => {
      return res;
    }));
  }

  getUser(username) {
    return this.httpClient.get(this.URLUsuarios + '?orderBy="username"&equalTo="' + username + '"').pipe(map((data: any) => {
      return data;
    }));
  }

  getEmail(email) {
    return this.httpClient.get(this.URLUsuarios + '?orderBy="email"&equalTo="' + email + '"').pipe(map((data: any) => {
      return data;
    }));
  }


  actualizarUsuario(username, contenido) {
    let body = JSON.stringify(contenido);
    let URLUsuariosActualizar = 'https://alquilacar-a9f10.firebaseio.com/usuarios/' + username + '.json';
    return this.httpClient.put( URLUsuariosActualizar, body );
  }

  borrarUsuario(id){
    const URLById = 'https://alquilacar-a9f10.firebaseio.com/usuarios/' + id + '.json';
    return this.httpClient.delete(URLById).pipe(map((data: any) => {
      console.log(data);
      return data;
    }));
  }
}
