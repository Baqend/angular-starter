import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatsComponent } from './chats.component';
import { DBReady } from '../db';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: ChatsComponent, resolve: { db: DBReady } },
  { path: ':id', component: DetailsComponent, resolve: { db: DBReady } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule { }
