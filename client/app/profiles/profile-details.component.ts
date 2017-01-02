import { Component, Input } from '@angular/core';

import { User } from '../../core/models/user';

import { UserService } from '../../core/services/user.service';
@Component({
    selector: '[app-profile-details]',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent {
    constructor(private userService: UserService){ }

    @Input() user: User;

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

    // ngOnInit() {
    //     this.userService.getUser()
    //         .subscribe(users=> this.users=users);
    // }
}
