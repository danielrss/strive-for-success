import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../core/services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public isUserLoggedIn: Observable<boolean> | boolean;

    private _authService: AuthService;

    constructor(authService: AuthService) {
        this._authService = authService;
    }

    ngOnInit() {
        this.isUserLoggedIn = this._authService.isLoggedIn();
    }

    ngDoCheck() {
        this.isUserLoggedIn = this._authService.isLoggedIn();
    }
}
