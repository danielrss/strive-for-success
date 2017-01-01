import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../../core/models/user';
import { UserService, UsersFactoryService, AlertService } from '../../../core/services';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    private readonly LETTERS_PATTERN: RegExp = /^[A-Za-zА-Яа-я]+$/;
    private readonly EMAIL_PATTERN: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    private readonly NUMBER_PATTERN: RegExp = /^[0-9]+$/;

    public form: FormGroup;
    public firstName: AbstractControl;
    public lastName: AbstractControl;
    public email: AbstractControl;
    public age: AbstractControl;
    public password: AbstractControl;
    public repeatPassword: AbstractControl;
    public passwords: FormGroup;

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
          'email': ['', Validators.compose([Validators.required, Validators.pattern(this.EMAIL_PATTERN)])],
          'passwords': fb.group({
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
          })
        });

        this.firstName = this.form.controls['firstName'];
        this.lastName = this.form.controls['lastName'];
        this.age = this.form.controls['age'];
        this.email = this.form.controls['email'];
        this.passwords = <FormGroup> this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
        this.repeatPassword = this.passwords.controls['repeatPassword'];
    }

    public ngOnInit() {

    }

    public ngAfterViewInit(): void {

    }

    public onSubmit(values: Object): void {
        this.submitted = true;

        if (this.form.valid) {
            this.user = this.userFactory.createUser(
              values['firstName'],
              values['lastName'],
              values['email'],
              values['passwords']['password']
            );

            this.userService.registerUser(this.user)
                .subscribe(
                  response => {
                    const successMessage = 'Registration successful!';
                    this.alertService.success(successMessage);
                  }, error => {
                    const errorMessage = "A user with the same email already exists!";
                    this.alertService.error(errorMessage);
                  }, () => {
                     setTimeout(() => this.router.navigateByUrl('/login'), 2500);
                });
        }
    }
}
