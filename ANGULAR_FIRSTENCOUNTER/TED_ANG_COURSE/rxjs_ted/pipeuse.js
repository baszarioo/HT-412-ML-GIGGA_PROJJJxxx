import { Observable, map, from } from 'rxjs';
const observable$ = from([12,2,3,44,45])
    .pipe(
        map((val) => val * 2)
    );
observable$.subscribe(value => console.log(value));