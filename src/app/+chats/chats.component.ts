import { Component } from '@angular/core';
import { db, model } from 'baqend';

@Component({
  selector: 'chats-list',
  template: `
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1" >
        <div *ngFor="let message of messages" class="panel panel-default" [routerLink]="['/chats', message.key]">
          <div class="panel-heading">
            <h3 class="panel-title">{{ message.name }}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-xs-1">
                <img [src]="getImageUrl(message)">
              </div>
              <div class="col-xs-11">
                {{ message.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .row { margin-top: 20px }
      img { width: 100% }
      .panel { cursor: pointer }
    `
  ]
})
export class ChatsComponent {

  private messages: Array<model.Message>;

  constructor() {}

  getImageUrl(message) {
    return new db.File(message.face).url;
  }

  ngOnInit() {
    db.Message
      .find()
      .resultList()
      .then(messages => this.messages = messages);
  }

}
