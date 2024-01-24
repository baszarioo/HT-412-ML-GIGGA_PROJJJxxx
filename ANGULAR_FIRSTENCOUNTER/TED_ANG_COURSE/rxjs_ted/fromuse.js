import { Observable, of, from} from "rxjs";

from(['teddy','is','cool']).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('complete!')
})
const promise = new Promise((resolve, reject) => {
    resolve('Resolve');
})

console.log(promise);
const observablePromise$ = from(promise);
observablePromise$.subscribe({
    next: (value) => console.log(value)
})