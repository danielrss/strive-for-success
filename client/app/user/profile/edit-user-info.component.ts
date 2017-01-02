import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../../core/models/user';
import { UserService, UsersFactoryService, AlertService } from '../../../core/services';

@Component({
    templateUrl: './edit-user-info.component.html',
    styleUrls: ['./edit-user-info.component.css']
})
export class EditUserInfoComponent {
    private readonly LETTERS_PATTERN: RegExp = /^[A-Za-zА-Яа-я]+$/;
    private readonly EMAIL_PATTERN: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    private readonly NUMBER_PATTERN: RegExp = /^[0-9]+$/;

    public form: FormGroup;
    public firstName: AbstractControl;
    public lastName: AbstractControl;
    public email: AbstractControl;
    public age: AbstractControl;

    public submitted: boolean = false;
    public user: User;

    constructor(
            private fb: FormBuilder,
            private router: Router,
            private userService: UserService,
            private userFactory: UsersFactoryService,
            private alertService: AlertService) {
        this.form = fb.group({
          'firstName': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.pattern(this.LETTERS_PATTERN)])],
          'lastName': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.pattern(this.LETTERS_PATTERN)])],
          'age': ['', Validators.compose([Validators.required, Validators.pattern(this.NUMBER_PATTERN)])],
          'email': ['', Validators.compose([Validators.required, Validators.pattern(this.EMAIL_PATTERN)])]
        });

        this.firstName = this.form.controls['firstName'];
        this.lastName = this.form.controls['lastName'];
        this.age = this.form.controls['age'];
        this.email = this.form.controls['email'];
    }

    public ngOnInit() {
        this.user = this.userService.loggedInUser;
        this.firstName.setValue(this.user.firstName);
        this.lastName.setValue(this.user.lastName);
        this.age.setValue(this.user.age);
        this.email.setValue(this.user.email);
    }

    public onSubmit(values: Object): void {
        this.submitted = true;

        if (this.form.valid) {
            let updatedUser =  this.userFactory.createUser(
                values['firstName'],
                values['lastName'],
                +values['age'],
                values['email'],
                null
            );

            this.userService.updateUser(this.user._id, updatedUser)
                .subscribe(
                    response => {
                        setTimeout(() => {
                            this.user.firstName = response.user.firstName;
                            this.user.lastName = response.user.lastName;
                        }, 500);

                        const successMessage = 'Your profile has been updated.';
                        this.alertService.success(successMessage);
                    }, error => {
                        const errorMessage = "A user with the same email already exists!";
                        this.alertService.error(errorMessage);
                    }, () => {
                        this.form.markAsPristine();
                    });
        }
    }
}
