import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {db} from "baqend";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})

export class Signup {

  user = {
    name: '',
    password: ''
  };
  error;

  constructor(private router:Router) {
    if (db.User.me)
      this.router.navigate(['/me']);
  }

  register() {
    db.User.register(this.user.name, this.user.password).then(() => {
      this.router.navigate(['/me']);
    }, (error) => {
      this.error = error.message;
    });
  }

  logIn() {
    db.User.login(this.user.name, this.user.password).then(() => {
      this.router.navigate(['/me']);
    }, (error) => {
      this.error = error.message;
    });
  }

}
