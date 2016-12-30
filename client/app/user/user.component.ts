import { Component, OnInit } from '@angular/core';

import { User } from '../../core/models/user';
import { UserService } from '../../core/services';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit() {

    }
}
