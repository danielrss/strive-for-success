import { Pipe, PipeTransform } from '@angular/core'
import { User } from '../models/user'

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(users: User[], filter: string): any[] {
        if (filter) {
            return users.filter(user => {
                return user.firstName.toLocaleLowerCase().indexOf(filter) > -1;
            });
        } else {
            return users;
        }
    }
}