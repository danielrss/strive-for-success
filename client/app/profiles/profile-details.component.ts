import { Component, OnInit } from '@angular/core';
import { RatingModule } from 'ng2-rating';
import { User } from '../../core/models/user';

import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit{
    private user: User;

    constructor(private userService: UserService, private activatedRoute: ActivatedRoute){
        this.user = {} as User;
     }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params['id'];
        this.userService.getUser(id)
                .subscribe(user => this.user = user.user);
    }

    get firstName(): string {
        return this.user.firstName;
    }

    get lastName():string{
        return this.user.lastName;
    }

    get email():string{
        return this.user.email;
    }

    get avatarUrl():string{
        return this.user.avatarUrl;
    }

    get age():number{
        return this.user.age;
    }

    get interview():any {
        return this.user.interview;
    }
}
