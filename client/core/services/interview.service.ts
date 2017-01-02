import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';

import { ApiService } from './api.service';
import { AuthService } from './auth.service';

import { Interview } from '../models/interview';

@Injectable()
export class InterviewsService {
    private interviewsPath: string = '/interviews';
    private createPath: string = '/interviews/create';

    constructor(private api: ApiService, private authService: AuthService) {}

    getUsers(): Observable<Interview[]> {
        return this.api.get(this.interviewsPath);
    }

    createInterview(interview: Interview): Observable<any> {
        return this.api.post(this.createPath, interview);
    }
 }
