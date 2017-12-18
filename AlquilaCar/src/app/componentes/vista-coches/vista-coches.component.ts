import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../services/marcas.service';
import { CochesService } from '../../services/coches.service';
import { Coche } from '../../interfaces/coche';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { PointReplacerPipe } from '../../pipes/point-replacer.pipe';
import { NgForm } from '@angular/forms';
import { Observable} from "rxjs/Observable";
import { CargaImagenService } from "../../services/carga-imagen.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vista-coches',
  templateUrl: './vista-coches.component.html',
  styleUrls: ['./vista-coches.component.css']
})
export class VistaCochesComponent implements OnInit {
  // Incializacion de variables
  marcas: any [] = [];
  plazas: number[] = [2, 4, 5, 6 , 7 , 8 , 9];
  puertas: number[] = [2, 3, 5];
  marca_seleccionada = '';
  puertas_seleccionadas = '0';
  plazas_seleccionadas = '0';
  seleccion = '';
  coches: Coche[];
  constructor(public router: Router, private _marcasService: MarcasService, private _cochesService: CochesService, private _cargaImagen: CargaImagenService) {

  }

  ngOnInit() {
    this.marcas = this._marcasService.marcas;
    this._cochesService.getCoches().subscribe(res => {
      const RESPONSE = res;
      const RESULT = [];
      for (let item in RESPONSE) {
        RESULT.push(RESPONSE[item]);
      }
      this.coches = RESULT;
      console.log(this.coches);
    });
    this._cochesService.getCoches().subscribe(res => {
      const RESPONSE = res;
      const RESULT = [];
      for (let item in RESPONSE) {
        RESULT.push(RESPONSE[item]);
      }
      this.coches = RESULT;
    });

  }
  // Funcion para buscar coches por marcas
  searchByMarca() {
    // La variable seleccion se setea vacia
    this.seleccion = this.marca_seleccionada;
    this.plazas_seleccionadas = '0';
    this.puertas_seleccionadas = '0';
    // Si la variable seleccion esta vacia se muestran todos los coches
    // Si no esta vacia se muestran los coches de la marca seleccionada
    if (this.seleccion === '') {
      this._cochesService.getCoches().subscribe(res => {
        const RESPONSE = res;
        const RESULT = [];
        for (let item in RESPONSE) {
          RESULT.push(RESPONSE[item]);
        }
        this.coches = RESULT;
      });
    }else {
      this._cochesService.getCochesByMarca(this.seleccion).subscribe(res => {
        const RESPONSE = res;
        const RESULT = [];
        for (let item in RESPONSE) {
          RESULT.push(RESPONSE[item]);
        }
        this.coches = RESULT;
      });
    }
  }
  // Funcion para buscar coches por puertas
  searchByPuertas() {
    // La variable seleccion se setea vacia
    this.seleccion = this.puertas_seleccionadas;
    this.plazas_seleccionadas = '0';
    this.marca_seleccionada = '';
    // Si la variable seleccion esta vacia se muestran todos los coches
    // Si no esta vacia se muestran los coches de la marca seleccionada
    if (this.seleccion === '0') {
      this._cochesService.getCoches().subscribe(res => {
        const RESPONSE = res;
        const RESULT = [];
        for (let item in RESPONSE) {
          RESULT.push(RESPONSE[item]);
        }
        this.coches = RESULT;
      });
    }else {
      this._cochesService.getCochesByPuertas(this.seleccion).subscribe(res => {
        const RESPONSE = res;
        const RESULT = [];
        for (let item in RESPONSE) {
          RESULT.push(RESPONSE[item]);
        }
        this.coches = RESULT;
      });
    }
  }
  // Funcion para buscar coches por plazas
  searchByPlazas() {
    // La variable seleccion se setea vacia
    this.seleccion = this.plazas_seleccionadas;
    this.marca_seleccionada = '';
    this.puertas_seleccionadas = '0';
    // Si la variable seleccion esta vacia se muestran todos los coches
    // Si no esta vacia se muestran los coches de la marca seleccionada
    if (this.seleccion === '0') {
      this._cochesService.getCoches().subscribe(res => {
        const RESPONSE = res;
        const RESULT = [];
        for (let item in RESPONSE) {
          RESULT.push(RESPONSE[item]);
        }
        this.coches = RESULT;
      });
    }else {
      this._cochesService.getCochesByPlazas(this.seleccion).subscribe(res => {
        const RESPONSE = res;
        const RESULT = [];
        for (let item in RESPONSE) {
          RESULT.push(RESPONSE[item]);
        }
        this.coches = RESULT;
      });
    }
  }
  viewCoche(id) {
    this.router.navigate(['/coche/', id]);
  }
}

