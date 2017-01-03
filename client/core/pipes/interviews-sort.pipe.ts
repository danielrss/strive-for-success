import { Pipe, PipeTransform } from '@angular/core';
import { Interview } from '../models/interview';

@Pipe({ name: 'interviewsSortPipe' })
export class InterviewsSortPipe implements PipeTransform {
    transform(interviews: Interview[], category:string): any {
        let res = [];
        for (let i = 0; i < interviews.length; i++) {
            if (interviews[i].category === category) {
                res.push(interviews[i]);
            }
        }

        return res;
    }
}