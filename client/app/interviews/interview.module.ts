import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InterviewsMainComponent } from './interviews-main.component';
import { InterviewsAllComponent } from './interviews-all.component';
import { InterviewDetailsComponent } from './interview-details.component'
import { InterviewCreateComponent } from './interview-create.component';
import { InterviewsArtComponent } from './interviews-art.component';
import { InterviewsBusinessComponent } from './interviews-business.component';
import { InterviewsTechnologyComponent } from './interviews-technology.component';
import { PipesModule } from '../../core/pipes';
import { InterviewsFilterPipe } from '../../core/pipes';
import { FilterPipe } from '../../core/pipes'

@NgModule({
    declarations: [
        InterviewsMainComponent,
        InterviewsAllComponent,
        InterviewDetailsComponent,
        InterviewCreateComponent,
        InterviewsArtComponent,
        InterviewsBusinessComponent,
        InterviewsTechnologyComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PipesModule
    ],
    exports: [],
    providers: [ 
        InterviewsFilterPipe,
        FilterPipe 
    ]
})
export class InterviewModule { }
