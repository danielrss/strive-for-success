import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { ProfilesAllComponent } from './profiles-all.component';
import { ProfileDetailsComponent } from './profile-details.component'

import { PipesModule } from '../../core/pipes';

@NgModule({
    declarations: [
        ProfilesAllComponent,
        ProfileDetailsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        BrowserModule,
        FormsModule,
        PipesModule
    ],
    exports: [],
    providers: []
})
export class ProfileModule { }
