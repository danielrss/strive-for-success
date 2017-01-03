import { Pipe, PipeTransform } from '@angular/core'
import { User } from '../models/user'

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform{
    transform(users: User[], options: any[]): any[]{
        if(users && options){
            return users.sort((a,b) => {
                switch(options[0]){
                    case 'FirstName':
                        return options[1] > 0 ? a.firstName.localeCompare(b.firstName) : b.firstName.localeCompare(a.firstName);
                    case 'LastName':
                        return options[1] > 0 ? +a.lastName - +b.lastName : +b.lastName - +a.lastName;
                    case 'Rating':
                        return options[1] > 0 ? +a.rating - +b.rating : +b.rating - +a.rating;
                }
            });
        } else {
            return users.sort();
        }
    }
}