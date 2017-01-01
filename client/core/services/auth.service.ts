import { Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Rx";

import { ApiService } from './api.service';

@Injectable()
export class AuthService {
    private authenticationApiUrl: string = '/users/authenticate';
    private loggedInUser: any;

    constructor(private api: ApiService) {}

    public isLoggedIn(): Observable<boolean> | boolean {
        let userDataString: string = localStorage.getItem('user');

        if (!userDataString) {
            return false;
        }

        let token: string = JSON.parse(userDataString).auth_token;
        let contentTypeHeaderObject = {
            'Content-Type': 'application/json',
            'AuthToken': token
        };

        return this.api.post(this.authenticationApiUrl, {}, contentTypeHeaderObject)
            .map((response: any) => {
                if (response.success) {
                    this.loggedInUser = response.user;
                    return true;
                }

                return false;
            });
    }

    public getLoggedInUser(): any {
        return this.loggedInUser;
    }
}
