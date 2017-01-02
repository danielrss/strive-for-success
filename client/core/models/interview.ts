export class Interview {
    title: string;
    imageUrl: string;
    questions: { title: string, answer: string}[];
    isShownInHome: Boolean;
    createdOn: Date;
}
