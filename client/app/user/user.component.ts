import { Component, OnInit } from '@angular/core';

import { User } from '../../core/models/user';
import { UserService } from '../../core/services';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit() {

    }
}
