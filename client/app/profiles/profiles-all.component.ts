import { Component, OnInit } from '@angular/core';

import { AuthService, UserService } from '../../core/services';
import { User } from '../../core/models/user';
import { SortPipe } from '../../core/pipes';

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
    constructor(
        private authService: AuthService,
        private userService: UserService,
        private sortPipe: SortPipe) {
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

    onSort(sortBy: string, order: string) {
        if (sortBy === 'rating') {
            return;
        } else {
            this.sortPipe.transform(this.users, sortBy, order);
        }
    }
}
