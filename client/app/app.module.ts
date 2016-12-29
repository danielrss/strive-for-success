import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { DemoComponent } from './components/demo-component.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ], { useHash: true }),
     UserModule,
     HomeModule],
    declarations: [AppComponent, NavigationComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
