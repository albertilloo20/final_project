import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase/app';
import EmailAuthProvider = firebase.auth.EmailAuthProvider;
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario: Object = {
    nombre: '',
    apellido: '',
    email: ''
  }
  constructor() {

  }

  ngOnInit() {
  }
  guardar(user: NgForm) {
    console.log(user);
    console.log('Posteado');
  }
  /*
  registerUser(form: NgForm) {
    console.log(form.value.email);
    firebase.auth().createUserWithEmailAndPassword(form.value.email, form.value.password).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
    });
    this.router.navigate(['/home']);
  }*/
}
