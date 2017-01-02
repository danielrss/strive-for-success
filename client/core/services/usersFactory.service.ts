import { User } from '../models/user';

export class UsersFactoryService {
    constructor() {}

    createUser(firstName: string, lastName: string, age: number, email: string, password: string = null, avatarUrl: string = null): User {
        let user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.age = age;
        user.email = email;
        user.password = password;
        user.avatarUrl = avatarUrl;

        return user;
    }
}
