import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouterModule } from './home.router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule,
    FormsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }