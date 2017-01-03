import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { RatingModule } from 'ng2-rating';

import { ProfilesAllComponent } from './profiles-all.component';
import { ProfileDetailsComponent } from './profile-details.component'

import { PipesModule } from '../../core/pipes';

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
        PipesModule,
        RatingModule
        InfiniteScrollModule
    ],
    exports: [],
    providers: []
})
export class ProfileModule { }
