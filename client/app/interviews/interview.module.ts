import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { InterviewsMainComponent } from './interviews-main.component';
import { InterviewsAllComponent } from './interviews-all.component';
import { InterviewDetailsComponent } from './interview-details.component'

@NgModule({
    declarations: [
        InterviewsMainComponent,
        InterviewsAllComponent,
        InterviewDetailsComponent
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

export class InterviewModule { }