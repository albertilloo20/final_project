import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CochesService} from "../../services/coches.service";
import {Coche} from "../../interfaces/coche";
import {UserService} from "../../services/user.service";
import * as firebase from 'firebase';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.css']
})
export class VistaDetalladaComponent implements OnInit {
  idCoche;
  coche;
  is_logged_in;
  nombre;
  apellido;
  email;
  provincia;
  telefono;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private _cochesService: CochesService,
              private _userService: UserService) {
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.idCoche = params['id'];
      }
    });
    this._cochesService.getCocheById(this.idCoche).subscribe(res => {
      this.coche = res[this.idCoche];
      this._userService.getUser(this.coche.username).subscribe(resp => {
        const RESPONSE = resp;
        const RESULT = [];
        for (let item in RESPONSE) {
          RESULT.push(RESPONSE[item]);
        }
        this.nombre = RESULT[0].nombre;
        this.apellido = RESULT[0].apellido_uno;
        this.telefono = RESULT[0].telefono;
        this.email = RESULT[0].email;
        this.provincia = RESULT[0].provincia;

      });
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.is_logged_in = true;
      } else {
        this.is_logged_in = false;
      }
    });
  }

  ngOnInit() {
  }

}
/*const RESPONSE = resp;
const RESULT = [];
for (let item in RESPONSE) {
  console.log(item);
  RESULT.push(RESPONSE[item]);
}
this.nombre = RESULT[0].nombre;
this.apellido = RESULT[0].apellido_uno;
this.telefono = RESULT[0].telefono;
this.email = RESULT[0].email;
this.provincia = RESULT[0].provincia;*/
