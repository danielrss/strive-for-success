import { User } from './user';

export class Interview {
    _id: string;
    title: string;
    imageUrl: string;
    user: User;
    category: string;
    content: string;
    questions: [{}];
    isShownInHome: Boolean;
    createdOn: Date;
}
