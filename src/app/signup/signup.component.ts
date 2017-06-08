import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { db } from 'baqend';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  user = {
    name: '',
    password: ''
  };
  error;

  constructor(private router: Router) {
    if (db.User.me) {
      this.router.navigate(['/signup/me']);
    }
  }

  register() {
    db.User.register(this.user.name, this.user.password).then(() => {
      this.router.navigate(['/signup/me']);
    }, (error) => {
      this.error = error.message;
    });
  }

  logIn() {
    db.User.login(this.user.name, this.user.password).then(() => {
      this.router.navigate(['/signup/me']);
    }, (error) => {
      this.error = error.message;
    });
  }
}
