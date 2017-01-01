import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService, AuthService } from '../../core/services';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    public isUserLoggedIn: Observable<boolean> | boolean;

    private _userService: UserService;
    private _router: Router;
    private _authService: AuthService;

    constructor(userService: UserService, router: Router, authService: AuthService) {
        this._userService = userService;
        this._router = router;
        this._authService = authService;
    }

    ngOnInit() {
        this.isUserLoggedIn = this._authService.isLoggedIn();
    }

    ngDoCheck() {
        this.isUserLoggedIn = this._authService.isLoggedIn();
    }

    public logout() {
        this._userService.logoutUser();
        this._router.navigateByUrl('/');
    }
}
