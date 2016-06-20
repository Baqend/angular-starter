import { Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { Signup } from "./signup";
import { Me } from "./me";

import { DBReady, DBLoggedIn } from "./db.service";

export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  { path: 'signup', component: Signup, resolve: {db: DBReady} }, //will activate the route after the db is ready
  { path: 'me', component: Me, canActivate: [DBLoggedIn] }, //will prevent none logged in users from accessing it
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];
