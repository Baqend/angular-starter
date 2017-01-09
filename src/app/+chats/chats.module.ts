import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChatsComponent } from './chats.component';
import { DBReady } from '../db.service';
import { ChatsListComponent } from './chats-list.component';
import { ChatsDetailsComponent } from './chats-details.component';

// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: ChatsComponent, pathMatch: 'full', resolve: { db: DBReady } },
  { path: ':id', component: ChatsDetailsComponent, pathMath: 'full', resolve: { db: DBReady } },
];

@NgModule({
  declarations: [
    ChatsComponent,
    ChatsDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ChatsModule {
  static routes = routes;
}
