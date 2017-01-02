import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ProfilesAllComponent } from './profiles-all.component';
import { ProfileDetailsComponent } from './profile-details.component'

@NgModule({
    declarations: [
        ProfilesAllComponent,
        ProfileDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpModule
    ],
    exports: [],
    providers: []
})
export class ProfileModule { }
