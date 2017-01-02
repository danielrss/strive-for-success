export class Interview {

    _id: string;
    title: string;
    imageUrl: string;
    user: User;
    category: string;
    content: string;
    questions: { title: string, answer: string}[];
    isShownInHome: Boolean;
    createdOn: Date;
}
