import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from '../../../services/user.service';
import { FireServiceService } from '../../../services/fire-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  is_logged_in: boolean;
  username;
  constructor(private _userService: UserService,
              private _fireService: FireServiceService,
              public router: Router) {
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
        this.is_logged_in = true;
      } else {
        this.is_logged_in = false;
      }
    });
  }
  ngOnInit() {}
  logOut() {
    this._fireService.logOut();

    this.router.navigate(['/home']);
  }
}
