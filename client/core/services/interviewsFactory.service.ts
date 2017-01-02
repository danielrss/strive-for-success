import { Interview } from '../models/interview';

export class InterviewsFactoryService {
    constructor() {}

    createInterview(title: string, questions: { title: string, answer: string}[]): Interview {
        let interview = new Interview();
        interview.title = title;
        interview.questions = questions;

        return interview;
    }
}
