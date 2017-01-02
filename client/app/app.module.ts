/* App Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/* Custom Modules */
import { UserModule } from './user';
import { InterviewModule } from './interviews';
import { ProfileModule } from './profiles';

/* Components */
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation';
import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { AlertComponent } from './directives';
import { NotFoundComponent } from './not-found';

/* Models */
import { User } from '../core/models/user'

/* Services */
import * as Services from '../core/services';

/* Router */
import { APP_ROUTES } from './app.router';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';

/* Pipes */
import { FilterPipe } from '../core/pipes/filter.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,

        RouterModule.forRoot(APP_ROUTES, { useHash: true }),

        UserModule,
        InterviewModule,
        ProfileModule
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        ContactComponent,
        AlertComponent,

        FilterPipe,
        NotFoundComponent
    ],
    providers: [
        Services.ApiService,
        Services.UserService,
        Services.UsersFactoryService,
        Services.InterviewsFactoryService,
        Services.AlertService,
        Services.AuthService,
        Services.InterviewsService,
        Services.InterviewsFactoryService,
        Services.UserInterviewsFactoryService,
        AuthGuard,
        NotAuthGuard,
        FilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
