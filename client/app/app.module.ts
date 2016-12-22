import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DemoComponent } from './components/demo-component.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, DemoComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
