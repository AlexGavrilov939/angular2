import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './products/main/main.component';
import { ByIdComponent } from './products/by-id/by-id.component';
import { InterestComponent } from './products/interest/interest.component';
import { SportifyComponent } from './products/sportify/sportify.component';

import {routes as productChildRoutes} from './products/products.component';
import { TestComponent } from './products/test/test.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent, children: productChildRoutes }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    MainComponent,
    ByIdComponent,
    InterestComponent,
    SportifyComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
