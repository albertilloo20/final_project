import { Component, OnInit } from '@angular/core';
import {CochesService} from "../../services/coches.service";
import * as firebase from 'firebase';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listado-coches',
  templateUrl: './listado-coches.component.html',
  styleUrls: ['./listado-coches.component.css']
})
export class ListadoCochesComponent implements OnInit {
  /*coche = {
    alquilado: false,
    descripcion: '',
    id: '',
    imageurl: '',
    km: '',
    marca: '',
    modelo: '',
    plazas: '',
    precio: '',
    puertas: '',
    username: ''
  }*/
  arrayCoches;
  username;
  mensajeOk = '';
  constructor(private _cochesService: CochesService, private _userService: UserService, public route: Router) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this._userService.getEmail(user.email).subscribe(resp => {
          const RESPONSE = resp;
          const RESULT = [];
          for (let item in RESPONSE) {
            RESULT.push(RESPONSE[item]);
          }
          this.username = RESULT[0].username;
          this._cochesService.getCochesByUser(this.username).subscribe(res => {
            const RESPONSECARS = res;
            const RESULTCARS = [];
            for (let item in RESPONSECARS) {
              RESULTCARS.push(RESPONSECARS[item]);
            }
            this.arrayCoches = RESULTCARS;
            console.log(this.arrayCoches);
          }, error => {
            console.log(error);
          });
        });
      } else {

      }
    });
  }

  ngOnInit() {
  }
  cambiaAlquilado(id, alquilado){
    this._cochesService.updateAlquilado(id, alquilado);
    this._cochesService.getCochesByUser(this.username).subscribe(res => {
      const RESPONSECARS = res;
      const RESULTCARS = [];
      for (let item in RESPONSECARS) {
        RESULTCARS.push(RESPONSECARS[item]);
      }
      this.arrayCoches = RESULTCARS;
      console.log(this.arrayCoches);
    }, error => {
      console.log(error);
    });
  }

  borrarCoche(id) {
    this._cochesService.borrarCoche(id).subscribe(res => {
      this._cochesService.getCochesByUser(this.username).subscribe(res => {
        const RESPONSECARS = res;
        const RESULTCARS = [];
        for (let item in RESPONSECARS) {
          RESULTCARS.push(RESPONSECARS[item]);
        }
        this.arrayCoches = RESULTCARS;
        console.log(this.arrayCoches);
      }, error => {
        console.log(error);
      });
      this.mensajeOk = 'Coche eliminado con exito';
    });

  }
}
