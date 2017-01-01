import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class NotAuthGuard implements CanActivate {

    constructor() { }

    canActivate() {
        let userDataString: string = localStorage.getItem('user');
        if (userDataString) {
            return false;
        }

        return true;
    }
}
