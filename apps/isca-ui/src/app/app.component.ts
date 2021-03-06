import { Component } from '@angular/core';
import {
  Router, 
  NavigationStart, 
  NavigationEnd,
  NavigationCancel, 
  NavigationError, 
  Event 
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ISCA';

  cargando = true
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.cargando = true;
      }

      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel) {
        this.cargando = false;
      }

    });
  }
}

