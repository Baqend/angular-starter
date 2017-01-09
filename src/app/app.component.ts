/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

// load alle bootstrap js modules, remove if not needed
import 'bootstrap-sass/assets/javascripts/bootstrap/affix';
import 'bootstrap-sass/assets/javascripts/bootstrap/alert';
import 'bootstrap-sass/assets/javascripts/bootstrap/button';
import 'bootstrap-sass/assets/javascripts/bootstrap/carousel';
import 'bootstrap-sass/assets/javascripts/bootstrap/collapse';
import 'bootstrap-sass/assets/javascripts/bootstrap/dropdown';
import 'bootstrap-sass/assets/javascripts/bootstrap/modal';
import 'bootstrap-sass/assets/javascripts/bootstrap/tooltip';
import 'bootstrap-sass/assets/javascripts/bootstrap/popover';
import 'bootstrap-sass/assets/javascripts/bootstrap/scrollspy';
import 'bootstrap-sass/assets/javascripts/bootstrap/tab';
import 'bootstrap-sass/assets/javascripts/bootstrap/transition';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <nav>
      <a [routerLink]=" ['./'] " routerLinkActive="active">
        Index
      </a>
      <a [routerLink]=" ['./home'] " routerLinkActive="active">
        Home
      </a>
      <a [routerLink]=" ['./detail'] " routerLinkActive="active">
        Detail
      </a>
      <a [routerLink]=" ['./barrel'] " routerLinkActive="active">
        Barrel
      </a>
      <a [routerLink]=" ['./signup'] " routerLinkActive="active">
        Signup
      </a>
      <a [routerLink]=" ['./chats'] " routerLinkActive="active">
        Chats
      </a>
      <a [routerLink]=" ['./about'] " routerLinkActive="active">
        About
      </a>
    </nav>

    <main class="container">
      <router-outlet></router-outlet>
    </main>

    <div class="container">
      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
    </div>

    <footer class="container">
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <span>Angular 2 + Baqend by <a [href]="baqend">@Baqendcom</a></span>
      <div>
        <a [href]="baqend">
          <img [src]="angularbaqendLogo" style="max-width: 400px; margin: auto; display: block">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent {
  public angularbaqendLogo = 'assets/Angular+Baqend.svg';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';
  public baqend = 'https://www.baqend.com';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
