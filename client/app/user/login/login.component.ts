import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService, AlertService } from '../../../core/services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    private readonly EMAIL_PATTERN: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;

    public submitted:boolean = false;

    constructor(
            private fb: FormBuilder,
            private router: Router,
            private userService: UserService,
            private alertService: AlertService) {
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.pattern(this.EMAIL_PATTERN)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        });

        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    public onSubmit(values: Object): void {
        this.submitted = true;
        if (this.form.valid) {
            this.userService.loginUser(this.email.value, this.password.value)
                .subscribe((response: any) => {
                    if(!response.auth_token){
                        throw new Error('Invalid login');
                    }

                    this.userService.setLoggedUser(response);

                    const successMessage = "Welcome! You have logged in successfully!";
                    this.alertService.success(successMessage)
                    }, (err: any) => {
                        console.log(err);
                        const errorMessage = "Wrong username or password! Please try again.";
                        this.alertService.error(errorMessage);
                    }, () => {
                        setTimeout(() => this.router.navigateByUrl('/my-profile'), 500);
                });
        }
    }
}
