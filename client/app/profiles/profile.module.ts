import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { ProfilesAllComponent } from './profiles-all.component';
import { ProfileDetailsComponent } from './profile-details.component'

import { FilterPipe } from '../../core/pipes/filter.pipe';

@NgModule({
    declarations: [
        ProfilesAllComponent,
        ProfileDetailsComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        InfiniteScrollModule
    ],
    exports: [],
    providers: [
        FilterPipe
    ]
})
export class ProfileModule { }
