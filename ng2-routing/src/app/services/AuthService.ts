import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    login(user: string, password: string): boolean {
        if (user === 'user' && password === 'password') {
            localStorage.setItem('username', user);
            return true;
        }

        return false;
    }

    logout(): boolean {
        localStorage.removeItem('username');
        return true;
    }

    getUser():any {
        return localStorage.getItem('username');
    }

    isLoggedIn():boolean {
        return this.getUser() !== null;
    }
}

export const AUTH_PROVIDERS: Array<Object> = [
    { provide: AuthService, useClass: AuthService }
];