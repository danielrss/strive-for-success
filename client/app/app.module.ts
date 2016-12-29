/* App Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Router} from '@angular/router';

/* Components */
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
/* Routers */
import { HomeRouter } from './components/home/home.router';

@NgModule({
    imports: [
        BrowserModule, 
        HttpModule, 

        HomeRouter,
        RouterModule.forRoot([
            { path: '', redirectTo: '/', pathMatch: 'full'}
        ])
    ],
    declarations: [AppComponent, NavigationComponent, HomeComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
