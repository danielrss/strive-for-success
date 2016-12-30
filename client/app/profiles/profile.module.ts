import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { ProfilesMainComponent } from './profiles-main.component';
import { ProfilesAllComponent } from './profiles-all.component';
import { ProfileDetailsComponent } from './profile-details.component'

@NgModule({
    declarations: [
        ProfilesMainComponent,
        ProfilesAllComponent,
        ProfileDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        BrowserModule
    ],
    exports: [],
    providers: []
})

export class ProfileModule { }