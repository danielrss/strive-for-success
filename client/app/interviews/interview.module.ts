import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InterviewsMainComponent } from './interviews-main.component';
import { InterviewsAllComponent } from './interviews-all.component';
import { InterviewDetailsComponent } from './interview-details.component'
import { InterviewCreateComponent } from './interview-create.component';

@NgModule({
    declarations: [
        InterviewsMainComponent,
        InterviewsAllComponent,
        InterviewDetailsComponent,
        InterviewCreateComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpModule
    ],
    exports: [],
    providers: []
})
export class InterviewModule { }
