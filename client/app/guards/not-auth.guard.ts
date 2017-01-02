import { Router, CanActivate } from '@angular/router';

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
