import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService, AuthService, AlertService } from '../../core/services';
import { User } from '../../core/models/user'

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    public isUserLoggedIn: Observable<boolean> | boolean;

    constructor(
            private userService: UserService,
            private router: Router,
            private authService: AuthService,
            private alertService: AlertService) { }

    ngOnInit() {
        this.isUserLoggedIn = this.authService.isLoggedIn();
    }

    ngDoCheck() {
        this.isUserLoggedIn = this.authService.isLoggedIn();
    }

    public logout() {
        this.alertService.success('You have logged out successfully.')
        this.userService.logoutUser();
        setTimeout(() => this.router.navigateByUrl('/'), 1500);
    }
}
