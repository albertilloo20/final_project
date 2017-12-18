import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProvinciasService } from '../../services/provincias.service';
import * as firebase from 'firebase';
import {Usuario, UsuarioAuth} from '../../interfaces/usuario';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  provincias;
  forma;
  usuario: Usuario;
  usuario_auth: UsuarioAuth;

  constructor(private _provinciasService: ProvinciasService, private _userService: UserService, public router: Router) {
    this.provincias = this._provinciasService.provincias;
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.pattern('^([A-ZÁÉÍÓÚa-zñáéíóú]+[\\s]*)+$')]),
      'username': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]*$')], this.existeUsuario.bind(this)),
      'apellido_uno': new FormControl('', [Validators.required, Validators.pattern('^([A-ZÁÉÍÓÚa-zñáéíóú]+[\\s]*)+$')]),
      'apellido_dos': new FormControl('', Validators.pattern('^([A-ZÁÉÍÓÚa-zñáéíóú]+[\\s]*)+$')),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$')], this.existeEmail.bind(this)),
      'telefono': new FormControl('', [Validators.required, Validators.pattern('^[9|6|7][0-9]{8}$')]),
      'password': new FormControl('', [Validators.required, Validators.pattern('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$')]),
      // 'password_dos': new FormControl('', [Validators.required, Validators.pattern('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$')]),
      'provincia': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  verUser() {
    this.usuario = {
      // uid: '',
      email: this.forma.value.email.toLowerCase(),
      nombre: this.forma.value.nombre.toLowerCase(),
      username: this.forma.value.username.toLowerCase(),
      apellido_uno: this.forma.value.apellido_uno.toLowerCase(),
      apellido_dos: this.forma.value.apellido_dos.toLowerCase(),
      telefono: this.forma.value.telefono,
      provincia: this.forma.value.provincia.toLowerCase(),
    };
    this.usuario_auth = {
      email: this.forma.value.email.toLowerCase(),
      password: this.forma.value.password,
      //  password_dos: this.forma.value.password_dos,
    };
    firebase.auth().createUserWithEmailAndPassword(this.usuario_auth.email, this.usuario_auth.password).catch(err => {
      // Handle Errors here.
      let errorCode = err.code;
      let errorMessage = err.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
    this._userService.guardarUsuario(this.usuario);
    this.router.navigate(['/coches']);
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          this._userService.getUser(control.value.toLowerCase()).subscribe(res => {
            if (Object.keys(res).length !== 0) {
              resolve({existe: true});
            } else {
              resolve(null);
            }
          });
        }, 1500);
      });
   return promesa;
  }

  existeEmail(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout( () => {
          this._userService.getEmail(control.value.toLowerCase()).subscribe(res => {
            if (Object.keys(res).length !== 0) {
              resolve({existe: true});
            } else {
              resolve(null);
            }
          });
        }, 1500);
      });
    return promesa;
  }
}
/*
      this._userService.getUser(this.usuario.username).subscribe(res => {
        if (Object.keys(res).length !== 0) {
          //this._userService.guardarUsuario(this.usuario);
          this.user_exist = true;
        } else {
          firebase.auth().createUserWithEmailAndPassword(this.usuario_auth.email, this.usuario_auth.password).catch(err => {
            // Handle Errors here.
            let errorCode = err.code;
            let errorMessage = err.message;
            this.email_exist = true;
          });
          if (this.email_exist == false) {
            this._userService.guardarUsuario(this.usuario);
          }
        }
      });
*/
/*firebase.auth().createUserWithEmailAndPassword(this.usuario_auth.email, this.usuario_auth.password).catch(err => {
  // Handle Errors here.
  let errorCode = err.code;
  let errorMessage = err.message;
  this.email_exist = true;
});*/
// console.log(this.forma);

// La movida es que esta dentro del subscribe
/*existeUsuario(control: FormControl): any {
  this._userService.getUser(control.value).subscribe( res => {
    if (Object.keys(res).length !== 0) {
      console.log('Error existe');
      console.log(this.forma);
      return  {
        existeUsuario: true
      };
    }else {
      console.log('no existe')
      return null;
    }
  });

}*/
