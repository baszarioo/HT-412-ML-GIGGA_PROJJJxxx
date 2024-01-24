import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
const observable$ = from([1,1,1,2,2,2])
    .pipe(filter((num) => num === 2));
const subscribed = observable$
    .subscribe((val) => console.log(val));