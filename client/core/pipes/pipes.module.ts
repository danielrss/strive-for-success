import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { InterviewsSortPipe } from './interviews-sort.pipe';
import { FilterPipe } from './filter.pipe';
import { InterviewsFilterPipe } from './interviews-filter.pipe';

@NgModule({
    declarations: [
        InterviewsSortPipe,
        InterviewsFilterPipe,
        FilterPipe
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [
        InterviewsSortPipe,
        InterviewsFilterPipe,
        FilterPipe
    ],
    providers: []
})

export class PipesModule { }
