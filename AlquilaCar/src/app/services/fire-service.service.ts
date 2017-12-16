import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class FireServiceService {

  constructor(public router: Router, public afAuth: AngularFireAuth) { }

  loginWithEmail(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);

  }
  logOut() {
    firebase.auth().signOut().then(success => {
    }).catch(function(error) {
      console.log(error);
    });
  }
}
