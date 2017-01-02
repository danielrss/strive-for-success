import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { InterviewsSortPipe } from './interviews-sort.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
    declarations: [
        InterviewsSortPipe,
        FilterPipe
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [
        InterviewsSortPipe
    ],
    providers: []
})

export class PipesModule { }
