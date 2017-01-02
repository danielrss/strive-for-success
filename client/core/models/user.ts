export class User {
    _id: string;
    firstName: string;
    lastName: string;
    password: string;
    age: number;
    email: string;
    avatarUrl: string;
    dateCreated: Date;
    interview: { id: string, title: string}
}
