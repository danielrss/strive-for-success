import { Interview } from '../models/interview';
import { User } from '../models/user';

export class UserInterviewsFactoryService {
    constructor() {}

    createInterview(user: User, title: string, questions: { title: string, answer: string}[]): Interview {
        let interview = new Interview();
        interview.title = title;
        interview.questions = questions;
        interview.user = user;

        return interview;
    }
}
