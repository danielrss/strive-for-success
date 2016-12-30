import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'; 
import { Observable} from 'rxjs/Observable';

import { ApiService } from './api.service';

import { User } from '../models/user';

@Injectable()
export class UserService {
    private usersPath: string = '/users';
    private registerPath: string = '/register';
    private loginPath: string = '/login';
    private logoutPath: string = '/logout';

    constructor(private api: ApiService){

    }

    getUsers() : Observable<User[]> {
        return this.api.get(this.usersPath);
    }

    registerUser(user: User) : Observable<any> {
        return this.api.put(this.registerPath, user);
    }

    loginUser(user: User) {

    }

    logoutUser(user: User) {

    }

    deleteUser(user: User) : Observable<any> {
        return this.api.delete(`${this.usersPath}/${user._id}`);
    }
 }
