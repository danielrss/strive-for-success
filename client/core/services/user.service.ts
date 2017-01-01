import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';

import { User } from '../models/user';

@Injectable()
export class UserService {
    private usersPath: string = '/users';
    private registerPath: string = '/users/register';
    private loginPath: string = '/users/login';
    private logoutPath: string = '/users/logout';

    constructor(private api: ApiService, private authService: AuthService) {}

    getUsers(): Observable<User[]> {
        return this.api.get(this.usersPath);
    }

    registerUser(user: User): Observable<any> {
        return this.api.post(this.registerPath, user);
    }

    loginUser(email: string, password: string) {
        return this.api.post(this.loginPath, { username: email, password })
    }

    logoutUser() {
        localStorage.clear();
    }

    isLoggedIn() : any {
        return this.authService.isLoggedIn();
    }

    setLoggedUser(authResponse: any) {
        localStorage.setItem('user', JSON.stringify(authResponse));
    }

    get loggedInUser() {
        return this.authService.getLoggedInUser();
    }
 }
