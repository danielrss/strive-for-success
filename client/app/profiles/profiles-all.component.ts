import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { AuthService, UserService } from '../../core/services';

import { User } from '../../core/models/user';

import { FilterPipe } from '../../core/pipes/filter.pipe';
@Component({
    selector: 'app-profiles-all',
    templateUrl: './profiles-all.component.html'
    //styleUrls: ['./profiles-all.component.css']
})
export class ProfilesAllComponent implements OnInit{
    public users: User[];

    constructor(private http: Http, private authService: AuthService, private userService: UserService, private filterPipe: FilterPipe) {
        this.users=[];
    }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(users=> this.users=users);
    }

    onSearch(option: string){
        this.filterPipe.transform(this.users, option)
    }
}
