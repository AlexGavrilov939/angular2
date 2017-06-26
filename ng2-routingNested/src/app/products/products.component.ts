import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ByIdComponent } from './by-id/by-id.component';
import { InterestComponent } from './interest/interest.component';
import { TestComponent } from './test/test.component';


export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'test', component: TestComponent },
  { path: ':id', component: ByIdComponent },
];

@Component({
  selector: 'products',
  template: `
    <h2>Products area</h2>
    <div class="navLinks">
      <a [routerLink]="['test']">>test<</a> |
      <a [routerLink]="['main']">Main</a> |
      <a [routerLink]="['interest']">Interest</a> |

      Enter id: <input #id size="6">
      <button (click)="goToProduct(id.value)">Go</button>
    </div>
    <div class="products-area">
      <router-outlet></router-outlet>
    </div>
  `
})

export class ProductsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  goToProduct(id:string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }

  ngOnInit() {
  }

}
