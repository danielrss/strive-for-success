import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { InterviewsSortPipe } from './interviews-sort.pipe';
import { FilterPipe } from './filter.pipe';
import { OrderPipe } from './order.pipe';
import { SortPipe } from './users-sort.pipe';
import { InterviewsFilterPipe } from './interviews-filter.pipe';

@NgModule({
    declarations: [
        InterviewsSortPipe,
        FilterPipe,
        OrderPipe, 
        SortPipe,
        InterviewsFilterPipe,
        FilterPipe
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [
        InterviewsSortPipe,
        FilterPipe,
        OrderPipe,
        SortPipe,
        InterviewsFilterPipe,
    ],
    providers: [
        InterviewsSortPipe,
        FilterPipe,
        OrderPipe,
        SortPipe,
        InterviewsFilterPipe,
    ]
})

export class PipesModule { }
