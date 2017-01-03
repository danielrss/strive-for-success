import { Pipe, PipeTransform } from '@angular/core'
import { Interview } from '../models/interview';

@Pipe({
    name: 'interviewsFilterPipe'
})
export class InterviewsFilterPipe implements PipeTransform{
    transform(interviews: Interview[], filter: string): any[] {
        if (filter) {
            return interviews.filter(interview => {
                return interview.title.toLocaleLowerCase().indexOf(filter) > -1;
            });
        } else {
            return interviews;
        }
    }
}