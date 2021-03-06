import { Routes } from '@angular/router';

import {
    RegisterComponent,
    LoginComponent,
    MyProfileComponent,
    EditUserInfoComponent,
    EditUserInterviewComponent
} from './user';

import {
    InterviewsMainComponent,
    InterviewDetailsComponent,
    InterviewsAllComponent,
    InterviewCreateComponent,
    InterviewsArtComponent,
    InterviewsBusinessComponent,
    InterviewsTechnologyComponent
} from './interviews';

import {
    ProfileDetailsComponent,
    ProfilesAllComponent
} from './profiles';

import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { NotFoundComponent } from './not-found'
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'interviews/create', component: InterviewCreateComponent },
    { path: 'interviews/all', component: InterviewsAllComponent },
    { path: 'interviews/art', component: InterviewsArtComponent },
    { path: 'interviews/business', component: InterviewsBusinessComponent },
    { path: 'interviews/technology', component: InterviewsTechnologyComponent },
    { path: 'interviews/:id', component: InterviewDetailsComponent },
    { path: 'interviews', component: InterviewsMainComponent },
    { path: 'users/:id', component: ProfileDetailsComponent },
    {
        path: 'users', component: ProfilesAllComponent
        // children: [
        //     {
                // children: [
                //     {
                //         path: 'projects', component: ProjectsComponent,
                //         children: [
                //             { path: 'preview/:id', component: ProjectPreviewComponent }
                //         ]
                //     }
                // ]
            // },
            // { path: 'young-entrepreneurs', component: TopYoungEntrepreneuersComponent },
            // { path: 'successful-entrepreneurs', component: TopSuccessfulEntrepreneursComponent },
        // ]
    },
    { path: 'register', canActivate: [NotAuthGuard], component: RegisterComponent },
    { path: 'login', canActivate: [NotAuthGuard], component: LoginComponent },
        { path: 'my-profile/edit-info', canActivate: [AuthGuard], component: EditUserInfoComponent },
        { path: 'my-profile/edit-interview', canActivate: [AuthGuard], component: EditUserInterviewComponent },
    { path: 'my-profile', canActivate: [AuthGuard], component: MyProfileComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent }
];
