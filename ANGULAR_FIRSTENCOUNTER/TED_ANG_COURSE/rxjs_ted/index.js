import { Observable } from "rxjs";
let observable$ = new Observable((subscriber) => {
    subscriber.next("Hello worldie");
    subscriber.error();
    subscriber.complete();
})

let observer = {
    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log("Complete!");
    },
    error: (err) => {
        console.log("This is broken!");
    }
}
observable$.subscribe(observer);