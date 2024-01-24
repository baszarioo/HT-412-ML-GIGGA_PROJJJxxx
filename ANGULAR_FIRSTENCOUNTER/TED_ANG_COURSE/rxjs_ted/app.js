import {Observable, of} from 'rxjs';
// of('dawid','top','g').subscribe(value => console.log(value));
of('dawid','top','g').subscribe({
    next: value=>console.log(value),
    error: err => console.log(err),
    complete: () => console.log("complete")
});

function handmadeOf(...args) {
    return new Observable(subscriber => {
        for(let i = 0; i< args.length; i++) {
            subscriber.next(args[i])
        }
        subscriber.complete();
    })
}
handmadeOf('Dawid','is','topG').subscribe(value=>console.log(value));