import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { Signup } from "./signup";
import { Me } from "./me";

import { DBReady, DBLoggedIn } from "./db.service";

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: Signup, resolve: {db: DBReady} }, //will activate the route after the db is ready
  { path: 'me', component: Me, canActivate: [DBLoggedIn] }, //will prevent none logged in users from accessing it
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
      .then((comp: any) => comp.default),
  },
  { path: '**',    component: NoContentComponent },
];
