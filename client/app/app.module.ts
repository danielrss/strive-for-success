/* App Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

/* Custom Modules */
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';

/* Components */
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

/* Services */
import * as Services from '../core/services';

@NgModule({
    imports: [
      BrowserModule, 
      FormsModule, 
      HttpModule,

      RouterModule.forRoot([
        { path: '', redirectTo: '/', pathMatch: 'full' },
        { path: '**', redirectTo: '/', pathMatch: 'full' }
      ], { useHash: true }),
      
      UserModule,
      HomeModule
    ],
    declarations: [
      AppComponent, 
      NavigationComponent
    ],
    providers: [ 
      Services.ApiService, 
      Services.UserService 
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
