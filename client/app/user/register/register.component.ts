import {Component, OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { User } from '../../../core/models/user';

import { UserService } from '../../../core/services/user.service';
import { UsersFactoryService } from '../../../core/services/usersFactory.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  public form:FormGroup;
  public firstName:AbstractControl;
  public lastName:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;
  public user: User;

  constructor(fb:FormBuilder, private router: Router, private userService: UserService, private userFactory: UsersFactoryService) {
    this.form = fb.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      })
    });

    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  ngOnInit():void {
    
  }

  public ngAfterViewInit(): void {
    
  }

  public onSubmit(values:Object):void {
    this.submitted = true;

    if (this.form.valid) {
      this.user = this.userFactory.createUser(
        values['firstName'],
        values['lastName'],
        values['email'],
        values['passwords']['password']
      );
      console.log(this.user);
      this.userService.registerUser(this.user)
          .subscribe(response => {
            console.log(response);
          }, err => {
            const message = err.json().message;
            console.log(err);
        }, () => {
          setTimeout(() => this.router.navigateByUrl('/login'), 500);
        });
    }
  }

}