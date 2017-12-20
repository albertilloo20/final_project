import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class UserDataGuard implements CanActivate {
  constructor (public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.router.navigate(['/userData']);
        return false;
      } else {
        this.router.navigate(['/login']);
      }
    });
    return true;

  }
}
