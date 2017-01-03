import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';

import { ApiService } from './api.service';

@Injectable()
export class ContactService {
    private usersPath: string = '/contact';

    constructor(private api: ApiService) {}

    sendEmail(emailObj: any) {
        return this.api.post(this.usersPath, emailObj);
    }
 }
