import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyProfileComponent } from './profile/my-profile.component';
import { EditUserInfoComponent } from './profile/edit-user-info.component';
import { EditUserInterviewComponent } from './profile/edit-user-interview.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        MyProfileComponent,
        EditUserInfoComponent,
        EditUserInterviewComponent
    ]
})
export class UserModule { }
