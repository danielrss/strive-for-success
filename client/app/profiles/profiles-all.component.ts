import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { AuthService, UserService } from '../../core/services';
import { User } from '../../core/models/user';

import { FilterPipe, OrderPipe, SortPipe } from '../../core/pipes';
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
    constructor(private http: Http, private authService: AuthService, private userService: UserService, 
        private filterPipe: FilterPipe, private orderPipe: OrderPipe, private sortPipe: SortPipe) {
        this.users=[];
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

    onSort(options: any[]){
        this.sortPipe.transform(this.users, options);
    }

    onOrder(options: any[]){
        this.orderPipe.transform(this.users, options);
    }
}
