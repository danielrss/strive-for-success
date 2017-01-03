import { Component, OnInit } from '@angular/core';
import { RatingModule } from 'ng2-rating';
import { Interview } from '../../core/models/interview';
import { User } from '../../core/models/user';

import { ActivatedRoute } from '@angular/router';
import { InterviewsService } from '../../core/services';

@Component({
    selector: 'app-interview-details',
    templateUrl: './interview-details.component.html',
    styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent implements OnInit{
    private interview: Interview

    constructor(private interviewsService: InterviewsService, private activatedRoute: ActivatedRoute){
        this.interview = {} as Interview;
     }

    ngOnInit() {
        let id = this.activatedRoute.snapshot.params['id'];
        this.interviewsService.getInterview(id)
                .subscribe(interview => this.interview = interview.interview);
    }
    
    // get author(): string {
    //     return this.interview.user.firstName + ' ' + this.interview.user.lastName;
    // }

    get category():string{
        return this.interview.category;
    }

    get content():string{
        return this.interview.content;
    }

    get user(): User {
        return this.interview.user;
    }
}
