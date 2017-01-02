import { Routes } from '@angular/router';

import {
    RegisterComponent,
    LoginComponent,
    MyProfileComponent
} from './user';

import {
    InterviewsMainComponent,
    InterviewDetailsComponent,
    InterviewsAllComponent,
    InterviewCreateComponent
} from './interviews';

import {
    ProfileDetailsComponent,
    ProfilesAllComponent
} from './profiles';

import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'interviews',
        component: InterviewsMainComponent,
        children: [
            { path: 'all', component: InterviewsAllComponent },
            { path: 'create', component: InterviewCreateComponent },
            { path: ':id', component: InterviewDetailsComponent }           
            // { path: 'business', component: InterviewsBusinessComponent },
            // { path: 'art', component: InterviewaArtComponent },
            // { path: 'technology', component: InterviewsTechnologyComponent }
        ]
    },
    {
        path: 'users',
        component: ProfilesAllComponent,
        children: [
            {
                path: ':id', component: ProfileDetailsComponent,
                // children: [
                //     {
                //         path: 'projects', component: ProjectsComponent,
                //         children: [
                //             { path: 'preview/:id', component: ProjectPreviewComponent }
                //         ]
                //     }
                // ]
            },
            // { path: 'young-entrepreneurs', component: TopYoungEntrepreneuersComponent },
            // { path: 'successful-entrepreneurs', component: TopSuccessfulEntrepreneursComponent },
        ]
    },
    { path: 'register', canActivate: [NotAuthGuard], component: RegisterComponent },
    { path: 'login', canActivate: [NotAuthGuard], component: LoginComponent },
    {
        path: 'my-profile',
        canActivate: [AuthGuard],
        component: MyProfileComponent,
        children: [
            // { path: 'edit', component: EditProfileComponent },
            // {
            //     path: 'projects', component: ProjectsComponent,
            //     children: [
            //         { path: 'create', component: CreateProjectComponent },
            //         { path: 'edit/:id', component: EditProjectComponent },
            //         { path: 'preview/:id', component: ProjectPreviewComponent }
            //     ]
            // }
        ]
    },
    { path: 'contact', component: ContactComponent }
];
