import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';

import { User } from '../models/user';
import { Interview } from '../models/interview';

@Injectable()
export class UserService {
    private usersPath: string = '/users';
    private registerPath: string = '/users/register';
    private loginPath: string = '/users/login';

    constructor(private api: ApiService, private authService: AuthService) {}

    getUsers(): Observable<any> {
        return this.api.get(this.usersPath);
    }

    registerUser(user: User): Observable<any> {
        return this.api.post(this.registerPath, user);
    }

    loginUser(email: string, password: string): Observable<any> {
        return this.api.post(this.loginPath, { username: email, password })
    }

    logoutUser() {
        localStorage.clear();
    }

    getUser(id: any) : Observable<any> {
        return this.api.get(`${this.usersPath}/${id}`);
    }

    isLoggedIn(): any {
        return this.authService.isLoggedIn();
    }

    setLoggedUser(authResponse: any) {
        localStorage.setItem('user', JSON.stringify(authResponse));
    }

    get loggedInUser(): User {
        return this.authService.getLoggedInUser();
    }

    updateUser(userId: string, update: any): Observable<any> {
        return this.api.post(`${this.usersPath}/${userId}`, update);
    }

    getInterview(): Observable<any> {
        return this.api.get(`${this.usersPath}/${this.loggedInUser._id}/interview`);
    }

    updateInterview(interview: Interview): Observable<any> {
        return this.api.post(`${this.usersPath}/${this.loggedInUser._id}/interview`, interview);
    }
 }
