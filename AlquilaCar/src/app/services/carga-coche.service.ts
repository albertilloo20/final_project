import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Coche} from "../interfaces/coche";
@Injectable()
export class CargaCocheService {
  URLCoches = 'https://alquilacar-a9f10.firebaseio.com/coches.json'
  constructor(private httpClient: HttpClient) { }

  guardarCoche(coche: Coche) {
    let body = coche;
    return this.httpClient.post( this.URLCoches, body );
  }
}
