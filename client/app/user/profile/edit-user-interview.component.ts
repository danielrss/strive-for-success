import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable} from 'rxjs/Observable';

import { User } from '../../../core/models/user';
import { Interview } from '../../../core/models/interview';
import { UserService, UserInterviewsFactoryService, AlertService } from '../../../core/services';

@Component({
    templateUrl: './edit-user-interview.component.html',
    styleUrls: ['./edit-user-info.component.css']
})
export class EditUserInterviewComponent {
    public form: FormGroup;
    public questions: {title: string, control: AbstractControl}[] = [];
    private defaultQuestionTitles: string[] = [
        'Tell us about yourself...',
        'What is your greatest strength?',
        'What is your greatest weakness?',
        'What are your goals for the future?',
        'What inspires you?'];
    private optionalQuestionTitles: string[] = [
        'If you could be any animal in the world, which one would you be and why?',
        `What do you think about when you're alone in your car?`,
        'What is the funniest thing that has happened to you recently?',
        'You’ve been given an elephant. You can’t give it away or sell it. What would you do with the elephant?',
        'Who would win a fight between Spiderman and Batman?',
        'How would you convince someone to do something they didn’t want to do?',
        'Describe the color yellow to somebody who is blind.',
        'What’s the most interesting thing about you',
        'What are you known for?',
        'What’s your favorite ’90s jam?',
        'You’re a new addition to the crayon box. What color would you be and why?'];
    private optionalQuestionsAdded = 0;

    public submitted: boolean = false;
    public user: User;
    public interview: Interview;
    public interviewTitle: string;

    constructor(
            private fb: FormBuilder,
            private router: Router,
            private userService: UserService,
            private interviewFactory: UserInterviewsFactoryService,
            private alertService: AlertService) {
    }

    public ngOnInit() {
        this.user = this.userService.loggedInUser;
        this.interviewTitle = `${this.user.firstName} ${this.user.lastName}'s interview`;

        let fbGroupObj = {};
        if (this.user.interview) {
            this.form = this.fb.group(fbGroupObj);
            this.userService.getInterview()
                .subscribe(
                    response => this.interview = response.interview,
                    err => console.log(err),
                    () => {
                        this.interview.questions.forEach(q => {
                            fbGroupObj[q.title] = ['', Validators.compose([Validators.required, Validators.minLength(10)])];
                        });
                        this.form = this.fb.group(fbGroupObj);

                        this.interview.questions.forEach(q => {
                            this.form.controls[q.title].setValue(this.interview.questions.find((qs => qs.title === q.title)).answer);
                            this.questions.push({ title: q.title, control: this.form.controls[q.title] })
                        });
                    }
                );
        } else {
            this.defaultQuestionTitles.forEach(qt => {
                fbGroupObj[qt] = ['', Validators.compose([Validators.required, Validators.minLength(10)])];
            });
            this.form = this.fb.group(fbGroupObj);

            this.defaultQuestionTitles.forEach(qt => {
                this.questions.push({ title: qt, control: this.form.controls[qt]})
            });
        }
    }

    public onSubmit(values: Object): void {
        this.submitted = true;

        if (this.form.valid) {
            let interviewQuestions: { title: string, answer: string }[] = [];
            this.questions.forEach(q => {
                interviewQuestions.push({ title: q.title, answer: q.control.value });
            });
            let updatedInterview = this.interviewFactory.createInterview(
                this.user,
                this.interviewTitle,
                interviewQuestions
            );

            this.userService.updateInterview(updatedInterview)
                .subscribe(
                    response => {
                        const successMessage = 'Your interview has been updated.';
                        this.alertService.success(successMessage);
                    }, error => {
                        console.log(error);
                    }, () => {
                        this.form.markAsPristine();
                    });
        }
    }

    public addQuestion() {
        if (this.optionalQuestionsAdded === this.optionalQuestionTitles.length) {
            return;
        }

        let isOptionalQuestionAdded = this.questions.find(q => q.title === this.optionalQuestionTitles[this.optionalQuestionsAdded]);
        while (isOptionalQuestionAdded) {
            this.optionalQuestionsAdded += 1;
            isOptionalQuestionAdded = this.questions.find(q => q.title === this.optionalQuestionTitles[this.optionalQuestionsAdded]);
        }
        let newQuestion = this.optionalQuestionTitles[this.optionalQuestionsAdded];
        this.form.addControl(newQuestion, new FormControl('', Validators.compose([Validators.required, Validators.minLength(10)])));
        this.questions.push({ title: newQuestion, control: this.form.controls[newQuestion] });
        this.optionalQuestionsAdded += 1;
    }
}
