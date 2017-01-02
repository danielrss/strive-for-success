import { Injectable } from '@angular/core';

import { Interview } from '../models/interview';
import { User } from '../models/user';

@Injectable()
export class InterviewsFactoryService {
    constructor() {}

    createInterview(title: string, imageUrl: string, user: any, category:string): Interview {
        let interview = new Interview();
        interview.title = title;
        interview.imageUrl = imageUrl;
        interview.user = user;
        interview.category = category;
        interview.createdOn = new Date();

        return interview;
    }
}