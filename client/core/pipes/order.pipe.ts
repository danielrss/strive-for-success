import { Pipe, PipeTransform } from '@angular/core'
import { User } from '../models/user';

@Pipe({
    name: 'order'
})
export class OrderPipe implements PipeTransform{
    transform(users: User[], options: any[]): any[]{
        if(users && options)
        {
            return users.sort((a,b) => {
                switch(options[0]){
                    case 'Asc':
                        return options[1] > 0 ? +a.age - +b.age : +b.age - +a.age;
                    case 'Desc':
                        return options[1] > 0 ? +b.age - +a.age : +a.age - +b.age;                        
                }
            });
        } else {
            return users;
        }
    }
}