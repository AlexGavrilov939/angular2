import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/AuthService';
import { LoggedInGuard } from './guards/LoggedInGuard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProtectedComponent } from "./protected/protected.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    //AuthService,
    LoggedInGuard,
    AuthService,
    //{ provide: APP_BASE_HREF, useValue: '/test' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },

    //{ provide: LocationStrategy, useClass: HashLocationStrategy } // anchor routing
    //{ provide: LocationStrategy, useClass: PathLocationStrategy } // HTML5 routing with pushState (default)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
