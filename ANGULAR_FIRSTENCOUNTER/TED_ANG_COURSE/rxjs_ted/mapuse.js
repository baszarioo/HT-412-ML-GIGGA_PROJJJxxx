import { Observable, map, from } from 'rxjs';
const newArr=[1,2,3,4];
const observable$ = from(newArr).pipe
    ((map((value) => value * 2)));
// const observable$ = from(newArr);
const returnValue = observable$.subscribe
    ((x)=> console.log(x));
