import {Component, OnInit} from '@angular/core';
import {model, db} from 'baqend';
import {Router} from "@angular/router";

@Component({
  selector: 'me',
  templateUrl: './me.component.html'
})

export class Me implements OnInit {

  me:model.User;

  constructor(private router:Router) {}

  ngOnInit() {
    this.me = db.User.me;
  }

  logout() {
    db.User.logout().then(() => {
      this.router.navigate(['/']);
    })
  }
}
