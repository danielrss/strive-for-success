import { User } from './user';

export class Interview {
    _id: string;
    title: string;
    imageUrl: string;
    user: any;
    category: string;
    questions: [{}];
    isShownInHome: Boolean;
    createdOn: Date;
}
