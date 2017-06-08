import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { DetailsComponent } from './details/details.component';
import { ChatsComponent } from './chats.component';

@NgModule({
  imports: [
    CommonModule,
    ChatsRoutingModule
  ],
  declarations: [
    DetailsComponent,
    ChatsComponent
  ]
})
export class ChatsModule {
}
