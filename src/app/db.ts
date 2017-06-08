import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { db, baqend } from 'baqend';

db.connect('app-starter', true);

@Injectable()
export class DBReady implements Resolve<baqend> {
  resolve(route: ActivatedRouteSnapshot): Promise<baqend> {
    return db.ready();
  }
}

@Injectable()
export class DBLoggedIn implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return db.ready().then(() => {
      if (!db.User.me) {
        this.router.navigate(['/signup']);
        return false;
      }
      return true;
    });
  }
}

export const DB_PROVIDERS = [DBReady, DBLoggedIn];
