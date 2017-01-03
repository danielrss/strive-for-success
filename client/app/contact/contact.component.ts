import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { UserService, AlertService, ContactService } from '../../core/services';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    private readonly EMAIL_PATTERN: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    public form: FormGroup;
    public email: AbstractControl;
    public name: AbstractControl;
    public subject: AbstractControl;
    public message: AbstractControl;

    public submitted:boolean = false;

    constructor(
            private fb: FormBuilder,
            private userService: UserService,
            private contactService: ContactService,
            private alertService: AlertService) {
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.pattern(this.EMAIL_PATTERN)])],
            'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'subject': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'message': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
        });

        this.email = this.form.controls['email'];
        this.name = this.form.controls['name'];
        this.subject = this.form.controls['subject'];
        this.message = this.form.controls['message'];
    }

    public onSubmit(values: Object): void {
        if (this.submitted) {
            this.alertService.success('Thank you for your message!');
        } else {
            this.submitted = true;

            if (this.form.valid) {
                let emailObj = {
                    name: values['name'],
                    email: values['email'],
                    subject: values['subjects'],
                    message: values['message'],
                }

                this.contactService.sendEmail(emailObj)
                    .subscribe((response: any) => {
                            const successMessage = "Thank you for your message!";
                            this.alertService.success(successMessage)
                        }, (err: any) => {
                            console.log(err);
                            const errorMessage = "Something went wrong. Please try again.";
                            this.alertService.error(errorMessage);
                        });
            }
        }
    }
}
