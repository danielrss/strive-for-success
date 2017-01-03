import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { AuthService, UserService } from '../../core/services';
import { User } from '../../core/models/user';

@Component({
    selector: 'app-profiles-all',
    templateUrl: './profiles-all.component.html',
    styleUrls: ['./profiles-all.component.css']
})
export class ProfilesAllComponent implements OnInit {
    public scrollDistance = 0;
    public scrollThrottle = 1000;
    private usersPageNumber: number = 0;
    private searchOption: string;

    public users: User[];

    constructor(private userService: UserService) {
        this.users = [];
    }

    ngOnInit() {
        this.userService.getUsers(this.usersPageNumber)
            .subscribe(users => this.users = users.users);
    }

    onSearch(option: string) {
        this.searchOption = option;

        if (option === undefined || option === '') {
            this.usersPageNumber = 0;
            this.userService.getUsers(this.usersPageNumber)
                .subscribe(users => this.users = users.users);
        } else {
            this.userService.searchUsers(option)
                .subscribe(users => this.users = users.users);
        }
    }

    onScroll() {
        if (!this.searchOption) {
            this.usersPageNumber += 1;
            this.userService.getUsers(this.usersPageNumber)
                .subscribe(users => this.users = this.users.concat(users.users));
        }
    }
}
