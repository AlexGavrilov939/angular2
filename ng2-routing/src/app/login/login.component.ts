import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/AuthService';


@Component({
  selector: 'login',
  template: `
    <form class="form-inline" *ngIf="!authService.getUser()"> <div class="form-group">
      <label for="username">User:</label>
      <input class="form-control" name="username" #username> </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input class="form-control" type="password" name="password" #password>
      </div>
      <a class="btn btn-default" (click)="login(username.value, password.value)"> Submit</a>
    </form>

    <div class="well" *ngIf="authService.getUser()">
      Logged in as <b>{{ authService.getUser() }}</b>
      <a href (click)="logout()">Log out</a>
    </div>
    <div class="alert alert-danger" role="alert" *ngIf="message">{{ message }}</div>
  `
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(private authService: AuthService) {
    this.message = '';
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials';
      setTimeout((): void => {this.message = ''}, 2500);
    }

    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

  ngOnInit() {
  }

}
