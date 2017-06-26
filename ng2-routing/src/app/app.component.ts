import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `

    <div class="page-header">
    <div class="container">
      <h1>Router Sample</h1>
      <div class="navLinks">
        <a [routerLink]="['/home']">Home</a>
        <a [routerLink]="['/about']">About</a>
        <a [routerLink]="['/protected']">Protected</a>
      </div>
    </div>
</div>
  <div id="content">
    <div class="container">
      <login></login>
<hr>
      <router-outlet></router-outlet>
    </div>
</div>
  `
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {

  }
}
