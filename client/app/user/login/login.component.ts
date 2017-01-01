import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../core/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    public form: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public passwords: FormGroup;

    public submitted:boolean = false;

    constructor(fb: FormBuilder, private router: Router, private userService: UserService) {
        this.form = fb.group({
          'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
          'passwords': fb.group({
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
          })
        });

        this.email = this.form.controls['name'];
        this.passwords = <FormGroup> this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
    }

    ngOnInit(): void {}

    public ngAfterViewInit(): void {}

    public onSubmit(values: Object): void {
        this.submitted = true;
        if (this.form.valid) {
            this.userService.loginUser(this.email.value, this.password.value)
                .subscribe((response: any) => {
                    console.log(response);
                    if(!response.auth_token){
                        throw new Error('Invalid login');
                    }

                    this.userService.setLoggedUser(response);

                    const successTitle = "Welcome!";
                    const successMessage = "You have logged in successfully!";
                    console.log(successTitle + successMessage);
                    }, (err: any) => {
                        console.log(err);
                        const errorTitle = "Invalid credentials!";
                        const errorMessage = "Wrong username or password! Please try again.";
                        console.log(errorTitle + errorMessage);
                    }, () => {
                        setTimeout(() => this.router.navigateByUrl('/my-profile'), 500);
                });
        }
    }
}
