import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { db, model } from 'baqend';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public message: model.Message;

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
