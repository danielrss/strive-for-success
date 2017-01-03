import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
export class ProfilesAllComponent implements OnInit{
    public users: User[];

    constructor(private http: Http, private authService: AuthService, private userService: UserService, 
        private filterPipe: FilterPipe, private orderPipe: OrderPipe, private sortPipe: SortPipe) {
        this.users=[];
    }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(users=> this.users=users);
    }

    onSearch(option: string){
        this.filterPipe.transform(this.users, option)
    }

    onSort(options: any[]){
        this.sortPipe.transform(this.users, options);
    }

    onOrder(options: any[]){
        this.orderPipe.transform(this.users, options);
    }
}
