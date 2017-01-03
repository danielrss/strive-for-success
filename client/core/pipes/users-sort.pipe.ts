import { Pipe, PipeTransform } from '@angular/core'
import { User } from '../models/user'

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform{
    transform(users: User[], sortBy: string, order: string): any[] {
        if (order.indexOf('asc') > -1) {
            return users.sort((m1, m2) => {
                return m1[sortBy].toString().localeCompare(m2[sortBy].toString());
            });
        } else {
            return users.sort((m1, m2) => {
                return m2[sortBy].toString().localeCompare(m1[sortBy].toString());
            });
        }
    }
}
