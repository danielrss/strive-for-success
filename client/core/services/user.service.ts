import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'; 
import { Observable} from 'rxjs/Observable';

import { ApiService } from './api.service';

import { User } from '../models/user';

@Injectable()
export class UserService {
    private path: string = '/users'

    constructor(private api: ApiService){

    }

    getUsers() : Observable<any> {
        return this.api.get(this.path);
    }
    createUser(user: User) : Observable<any> {
        return this.api.post(this.path, user);
    }
    deleteUser(user: User) : Observable<any> {
        return this.api.delete(`${this.path}/${user._id}`);
    }
 }
