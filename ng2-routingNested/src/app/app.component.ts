import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="navLinks">
      <a [routerLink]="['home']">Home</a> |
      <a [routerLink]="['products']">Products</a>
    </div>
    <div class="content-area">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'app';
}
