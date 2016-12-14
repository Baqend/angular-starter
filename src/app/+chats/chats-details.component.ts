import { Component } from '@angular/core';
import { db, model } from 'baqend';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'chats-details',
  template: `
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1" *ngIf="message">
        <div class="panel panel-default">
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
    `
  ]
})
export class ChatsDetailsComponent {

  private message: model.Message;

  constructor(private route: ActivatedRoute) {}

  getImageUrl(message) {
    return new db.File(message.face).url;
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        db.Message.load(params['id']).then(message => this.message = message);
      });
  }

}
