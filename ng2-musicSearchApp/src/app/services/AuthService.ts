import { Injectable } from '@angular/core';

export var AUTH_PROVIDERS: Array<any> = [
    { provide: AuthService, useClass: AuthService }
];

@Injectable()
export class AuthService {
    login(user: string, password: string): boolean {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('logged_in', user);
            return true;
        }

        return false;
    }

    logout(): any {
        localStorage.removeItem('logged_in');
    }

    getUser(): any {
        return localStorage.getItem('username');
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }
}