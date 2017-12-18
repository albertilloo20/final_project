import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CochesService {
  cochesURL = 'https://alquilacar-a9f10.firebaseio.com/coches.json';
  constructor(private httpClient: HttpClient) { }

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
}
