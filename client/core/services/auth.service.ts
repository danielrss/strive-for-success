import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';

import { User } from '../models/user';

const Register = '/register';
const Login = '/login';

@Injectable()
export class AuthService {
    constructor(private http: Http, private api: ApiService) {

    }

    register(user: User) {

    }

    login(user: NavigatorUserMediaSuccessCallback) {

    }

    logout() {

    }
}
