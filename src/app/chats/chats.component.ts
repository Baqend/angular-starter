import { Component, OnInit } from '@angular/core';
import { db, model } from 'baqend';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  public messages: Array<model.Message>;

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
