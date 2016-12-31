import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../core/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
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
                .subscribe(response => {
                  console.log(response);
                }, err => {
                  const message = err.json().message;
                  console.log(err);
              }, () => {
                // setTimeout(() => this.router.navigateByUrl('/my-profile'), 500);
              });
        }
    }
}
