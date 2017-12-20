import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class CochesService {
  cochesURL = 'https://alquilacar-a9f10.firebaseio.com/coches.json';
  constructor(private httpClient: HttpClient, public db: AngularFireDatabase) { }

  getCoches() {
    return this.httpClient.get(this.cochesURL).pipe(map((data: any) => {
      return data;
    }));
  }
  getCochesByMarca(marca: string) {
    const URLByMarca = this.cochesURL + '?orderBy="marca"&equalTo="' + marca + '"';
    return this.httpClient.get(URLByMarca).pipe(map((data: any) => {
      return data;
    }));
  }
  getCochesByPuertas(puertas: string) {
    const URLByMarca = this.cochesURL + '?orderBy="puertas"&equalTo="' + puertas + '"';
    return this.httpClient.get(URLByMarca).pipe(map((data: any) => {
      return data;
    }));
  }
  getCochesByPlazas(plazas: string) {
    const URLByMarca = this.cochesURL + '?orderBy="plazas"&equalTo="' + plazas + '"';
    return this.httpClient.get(URLByMarca).pipe(map((data: any) => {
      return data;
    }));
  }
  getCocheById(id: string) {
    const URLById = this.cochesURL + '?orderBy="id"&equalTo="' + id + '"';
    return this.httpClient.get(URLById).pipe(map((data: any) => {
      return data;
    }));
  }
  getCochesByAlquilado(alquilado){
    const URLById = this.cochesURL + '?orderBy="alquilado"&equalTo=' + alquilado ;
    return this.httpClient.get(URLById).pipe(map((data: any) => {
      return data;
    }));
  }

  getCochesByUser(username){
    const URLByUsername = this.cochesURL + '?orderBy="username"&equalTo="' + username + '"';
    return this.httpClient.get(URLByUsername).pipe(map((data: any) => {
      return data;
    }));
  }
  updateAlquilado(id, alquilado){
    let ref = this.db.list('coches/');
    ref.update(id,{
      alquilado: alquilado
    });
  }
  borrarCoche(id){
    const URLById = 'https://alquilacar-a9f10.firebaseio.com/coches/' + id + '.json';
    return this.httpClient.delete(URLById).pipe(map((data: any) => {
      console.log(data);
      return data;
    }));
  }
}
