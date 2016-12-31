import {Component, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    public form: FormGroup;
    public name: AbstractControl;
    public password: AbstractControl;
    public passwords: FormGroup;

    public submitted:boolean = false;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
          'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
          'passwords': fb.group({
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
          })
        });

        this.name = this.form.controls['name'];
        this.passwords = <FormGroup> this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
    }

    ngOnInit(): void {}

    public ngAfterViewInit(): void {}

    public onSubmit(values: Object): void {
        this.submitted = true;
        if (this.form.valid) {
        }
    }
}
