import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { InterviewsSortPipe } from './interviews-sort.pipe';
import { SortPipe } from './users-sort.pipe';
import { InterviewsFilterPipe } from './interviews-filter.pipe';

@NgModule({
    declarations: [
        InterviewsSortPipe,
        SortPipe,
        InterviewsFilterPipe
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [
        InterviewsSortPipe,
        SortPipe,
        InterviewsFilterPipe,
    ],
    providers: [
        InterviewsSortPipe,
        SortPipe,
        InterviewsFilterPipe,
    ]
})

export class PipesModule { }
