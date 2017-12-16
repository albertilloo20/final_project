import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FireServiceService} from '../../services/fire-service.service';
import {Router} from "@angular/router";

import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forma;
  error = '';
  constructor(private _fireService: FireServiceService,
              public router: Router) {
    this.forma = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$')]),
      'password': new FormControl('', [Validators.required, Validators.pattern('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$')]),
      // 'password_dos': new FormControl('', [Validators.required, Validators.pattern('^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$')]),
    });
  }

  ngOnInit() {
  }
  login() {
    let mail = this.forma.value.email.toLowerCase();
    let password = this.forma.value.password;
    this._fireService.loginWithEmail(mail, password).then(res => {
      this.router.navigate(['/coches']);
    }, error => {
      if (error.code = 'auth/invalid-email' || 'auth/wrong-password' || 'auth/user-not-found') {
        this.error = 'Los datos de incio de sesion no son correctos.';
      }
    });

  }
}
