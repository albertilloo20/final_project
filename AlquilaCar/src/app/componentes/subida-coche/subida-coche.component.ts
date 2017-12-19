import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MarcasService } from '../../services/marcas.service';
import {Coche} from '../../interfaces/coche';
import * as firebase from 'firebase';
import {Usuario, UsuarioAuth} from '../../interfaces/usuario';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {FileItem} from "../../models/file-item";
import {CargaImagenService} from "../../services/carga-imagen.service";
import {CargaCocheService} from "../../services/carga-coche.service";

@Component({
  selector: 'app-subida-coche',
  templateUrl: './subida-coche.component.html',
  styleUrls: ['./subida-coche.component.css']
})
export class SubidaCocheComponent implements OnInit {
  forma;
  marcas;
  coche: any;
  plazas: number[] = [2, 4, 5, 6 , 7 , 8 , 9];
  puertas: number[] = [2, 3, 5];
  estaSobreDropZone = false;
  permiteCargar = true;
  archivos: FileItem[] = [];
  username;
  mensajeOk = '';
  mensajeFail = '';
  constructor(private _marcasService: MarcasService, private _userService: UserService, public _cargaImagenes: CargaImagenService, private _cargaCoche: CargaCocheService) {
    this.marcas = this._marcasService.marcas;
    this.forma = new FormGroup({
      'descripcion': new FormControl('', [Validators.required, Validators.maxLength(200)]),
      'marca': new FormControl('', Validators.required),
      'modelo': new FormControl('', Validators.required),
      'plazas': new FormControl('', Validators.required),
      'puertas': new FormControl('', Validators.required),
      'kilometros': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*')]),
      'precio': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*')]),

    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this._userService.getEmail(user.email).subscribe(resp => {
          const RESPONSE = resp;
          const RESULT = [];
          for (let item in RESPONSE) {
            RESULT.push(RESPONSE[item]);
          }
          this.username = RESULT[0].username;
        });
      }
    });
  }

  ngOnInit() {
  }

  subeCoche() {
    this.coche =  {
      alquilado: false,
      username: this.username,
      descripcion: this.forma.value.descripcion.toLowerCase(),
      marca: this.forma.value.marca.toLowerCase(),
      modelo: this.forma.value.modelo.toLowerCase(),
      puertas: this.forma.value.puertas,
      plazas: this.forma.value.plazas,
      km: this.forma.value.kilometros,
      precio: this.forma.value.precio,
      id: ''
    };
    this._cargaCoche.guardarCoche(this.coche).subscribe(res => {
      if (res) {
        this.mensajeOk = 'Coche subido con exito';
      }
      this.cargarImagenesFirebase(res);
    }, error => {
      if (error) {
        this.mensajeFail = 'Ha ocurrido un error, por favor intentalo de nuevo';
      }
    });
    this.forma = new FormGroup({
      'descripcion': new FormControl('', [Validators.required, Validators.maxLength(200)]),
      'marca': new FormControl('', Validators.required),
      'modelo': new FormControl('', Validators.required),
      'plazas': new FormControl('', Validators.required),
      'puertas': new FormControl('', Validators.required),
      'kilometros': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*')]),
      'precio': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*')]),

    });
  }
  archivoSobreDropZone(evento: any) {
    this.estaSobreDropZone = evento;
  }
  cargarImagenesFirebase(id) {
    this.permiteCargar = false;
    this._cargaImagenes.cargar_imagenes_firebase(id, this.archivos);
  }
  limpiarArchivos() {
    this.archivos = [];
    this.permiteCargar = true;
  }
}
