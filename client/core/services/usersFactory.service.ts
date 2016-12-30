import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class UsersFactoryService {
  constructor() {}

  createUser(firstName: string, lastName: string, email: string, password: string): User {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.dateCreated = new Date();

    return user;
  }
}