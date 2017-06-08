import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DBLoggedIn, DBReady } from './db';
import { MeComponent } from './me/me.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full', resolve: { db: DBReady }}, // redirect to signup page
  { path: 'signup', component: SignupComponent, resolve: { db: DBReady } }, // will activate the route after the db is ready
  { path: 'signup/me', component: MeComponent, canActivate: [DBLoggedIn] }, // will prevent none logged in users from accessing it
  { path: 'chats', loadChildren: './chats/chats.module#ChatsModule'} // Using loadChildren to async load the route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
