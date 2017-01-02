import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Interview } from '../../core/models/interview';
import { User } from '../../core/models/user';
import { InterviewsService, InterviewsFactoryService, AlertService, UserService } from '../../core/services';

@Component({
    selector: 'app-interview-create',
    templateUrl: './interview-create.component.html',
    styleUrls: ['./interview-create.component.css']
})
export class InterviewCreateComponent implements OnInit {
    public form: FormGroup;
    public title: AbstractControl;
    public imageUrl: AbstractControl;
    public email: string;
    public user: any;
    public category: AbstractControl;
    public content: AbstractControl;

    public submitted: boolean = false;
    public interview: Interview;

    constructor(
            private fb: FormBuilder,
            private router: Router,
            private interviewsService: InterviewsService,
            private userService: UserService,
            private interviewsFactory: InterviewsFactoryService,
            private alertService: AlertService) {
        this.form = fb.group({
          'title': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
          'imageUrl': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
          'category': ['', Validators.compose([Validators.required])],
          'content': ['', Validators.compose([Validators.required, Validators.minLength(50)])]
        });

        
    }

    public ngOnInit() {
       this.title = this.form.controls['title'];
        this.imageUrl = this.form.controls['imageUrl'];
        this.user = { email: JSON.parse(localStorage.getItem('user')).email };
        // this.user = this.userService.loggedInUser;
        // console.log(this.user);
        // console.log(this.user.firstName);
        this.category = this.form.controls['category'];
        this.content = this.form.controls['content'];
    }

    public onSubmit(values: Object): void {
        this.submitted = true;

        if (this.form.valid) {
            this.interview = this.interviewsFactory.createInterview(
              values['title'],
              values['imageUrl'],
              this.user,
              values['category'],
              values['content']
            );

            this.interviewsService.createInterview(this.interview)
                .subscribe(
                  response => {
                    const successMessage = 'Creation successful!';
                    this.alertService.success(successMessage);
                  }, error => {
                    const errorMessage = "Creation failed!";
                    this.alertService.error(errorMessage);
                  }, () => {
                     setTimeout(() => this.router.navigateByUrl('/interviews'), 2500);
                });
        }
    }
}
