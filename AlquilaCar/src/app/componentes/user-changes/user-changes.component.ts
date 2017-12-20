import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import * as firebase from 'firebase';
import {ProvinciasService} from "../../services/provincias.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from "rxjs/Observable";
import {Usuario} from "../../interfaces/usuario";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {CochesService} from "../../services/coches.service";

@Component({
  selector: 'app-user-changes',
  templateUrl: './user-changes.component.html',
  styleUrls: ['./user-changes.component.css']
})
export class UserChangesComponent implements OnInit {
  usuario: any = {
    username: '',
    email: '',
    nombre: '',
    apellido_uno: '',
    apellido_dos: '',
    telefono: '',
    provincia: '',
  };
  provincias;
  forma =  new FormGroup({
    'nombre': new FormControl(this.usuario.nombre, [Validators.required, Validators.pattern('^([A-ZÁÉÍÓÚa-zñáéíóú]+[\\s]*)+$')]),
    'apellido_uno': new FormControl(this.usuario.apellido_uno, [Validators.required, Validators.pattern('^([A-ZÁÉÍÓÚa-zñáéíóú]+[\\s]*)+$')]),
    'apellido_dos': new FormControl(this.usuario.apellido_dos, Validators.pattern('^([A-ZÁÉÍÓÚa-zñáéíóú]+[\\s]*)+$')),
    'email': new FormControl(this.usuario.email, [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$')], this.existeEmail.bind(this)),
    'telefono': new FormControl(this.usuario.telefono, [Validators.required, Validators.pattern('^[9|6|7][0-9]{8}$')]),
    'provincia': new FormControl(this.usuario.provincia, Validators.required),
  });
  usuarioActualizar;
  item;
  mensajeOk = '';
  mensajeFail = '';
  closeResult: string;
  arrayCochesAeliminar;
  constructor(private _cochesService: CochesService, public route: Router, private _provinciasService: ProvinciasService, private _userService: UserService, private modalService: NgbModal) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this._userService.getEmail(user.email).subscribe(resp => {
          const RESPONSE = resp;
          const RESULT = [];
          for (let item in RESPONSE) {
            RESULT.push(RESPONSE[item]);
            this.item = item;
          }this.usuario = {
            username: RESULT[0].username,
            nombre: RESULT[0].nombre,
            apellido_uno: RESULT[0].apellido_uno,
            apellido_dos: RESULT[0].apellido_dos,
            email: RESULT[0].email,
            provincia: RESULT[0].provincia,
            telefono: RESULT[0].telefono,
          };
          this.forma = new FormGroup({
            'nombre': new FormControl(this.usuario.nombre, [Validators.required, Validators.pattern('^([A-ZÁÉÍÓÚa-zñáéíóú]+[\\s]*)+$')]),
            'apellido_uno': new FormControl(this.usuario.apellido_uno, [Validators.required, Validators.pattern('^([A-ZÁÉÍÓÚa-zñáéíóú]+[\\s]*)+$')]),
            'apellido_dos': new FormControl(this.usuario.apellido_dos, Validators.pattern('^([A-ZÁÉÍÓÚa-zñáéíóú]+[\\s]*)+$')),
            'email': new FormControl(this.usuario.email, [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$')], this.existeEmail.bind(this)),
            'telefono': new FormControl(this.usuario.telefono, [Validators.required, Validators.pattern('^[9|6|7][0-9]{8}$')]),
            'provincia': new FormControl(this.usuario.provincia, Validators.required),
          });
        });
      }
    });
    this.provincias = this._provinciasService.provincias;

  }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result == 'borrar'){
        this.borrarUsuario(this.item);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  borrarUsuario(id) {
    firebase.auth().currentUser.delete().then(ok => {
      this._userService.borrarUsuario(id).subscribe(res => {
        this._cochesService.getCochesByUser(this.usuario.username).subscribe(res => {
          const RESPONSECARS = res;
          const RESULTCARS = [];
          for (let item in RESPONSECARS) {
            RESULTCARS.push(item);
          }
          this.arrayCochesAeliminar = RESULTCARS;
          this._cochesService.borrarCochesDeUsuarioEliminado(this.arrayCochesAeliminar).subscribe(ok=>{
            this.route.navigate(['/adios']);
          }, error => {
            console.log(error);
          });
        }, error => {
          console.log(error);
        });
      }, error =>{
        this.mensajeFail = 'Ha ocurrido un error, intentelo de nuevo';
      });
    }).catch(err => {
      this.mensajeFail = 'Necesitas haberte autenticado recientemente para eliminar tu usuario';
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  updateUser(){
    this.usuarioActualizar = {
      username: this.usuario.username,
      email: this.forma.value.email.toLowerCase(),
      nombre: this.forma.value.nombre.toLowerCase(),
      apellido_uno: this.forma.value.apellido_uno.toLowerCase(),
      apellido_dos: this.forma.value.apellido_dos.toLowerCase(),
      telefono: this.forma.value.telefono,
      provincia: this.forma.value.provincia.toLowerCase(),
    };

    firebase.auth().currentUser.updateEmail(this.usuarioActualizar.email).then(ok => {
      this._userService.actualizarUsuario(this.item, this.usuarioActualizar).subscribe( res => {
          this.mensajeOk = 'Los datos se han actualizado correctamente';
          this.usuario = res;
        }, error => {
          this.mensajeFail = 'Ha ocurrido un error, intentelo de nuevo';
        }
      );
    }).catch(err => {
      this.mensajeFail = 'Necesitas haberte autenticado recientemente para cambiar el email';
    });
  }
  existeEmail(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          if(control.value.toLowerCase() != this.usuario.email) {
            this._userService.getEmail(control.value.toLowerCase()).subscribe(res => {
              if (Object.keys(res).length !== 0) {
                resolve({existe: true});
              } else {
                resolve(null);
              }
            });
          }else {
            resolve(null);
          }
        }, 1500);
      });
    return promesa;
  }
  enviarCambioDeContrasenia(){
    firebase.auth().sendPasswordResetEmail(this.usuario.email).then(ok => {
    this.mensajeOk = 'Se ha enviado un correo de cambio de contraseña a tu mail';
  }).catch(error => {
    this.mensajeFail = 'Ha ocurrido un error';
  });
}
}
