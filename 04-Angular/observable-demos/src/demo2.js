import { Observable } from 'rxjs';

/**
 * Observable Demo: one observable with 3 subscribers
 * 
 * 1. create observable which produces a data object every 4 seconds
 * 2. register subscriber one which simply outputs the data as they arrive
 * 3. register subscriber two which sums up the values and outputs the current sum
 * 4. register subscriber three which outputs whether the number received is even/odd
 */

const INTERVAL_DURATION_IN_SEC = 4;
const MAX_NUMBER = 3;
// produce error if this number occurs; set e.g. to 2 to produce error and
// see what happens with subscriber 3 ...
const INVALID_NUMBER = -1; 

console.log('starting observer producing one number every per interval...');
const observable = new Observable(subscriber => {
    let counter = 0;

    const timer = setInterval(() => {
        const data = { 
            n: ++counter, 
            text: 'Hello ' + counter 
        };
        if (data.n == INVALID_NUMBER) {
            // produce error when invalid counter is met (leave at -1 to NOT produce error)
            subscriber.error('An error occurred!');
        } else {
            // emit data object to subscribers
            subscriber.next(data);
        }
        if (counter == MAX_NUMBER) {
            clearInterval(timer);
        }
    }, INTERVAL_DURATION_IN_SEC * 1000);
});

console.log('registering subscriber1 which outputs the values it gets...')
observable.subscribe({
    next: data => {
        console.log('subscriber1: got value ' + data.n);
    },
    error: (err) => console.log('subscriber 1: ' + err)
});

let sum = 0;
console.log('registering subscriber2 which sums up the values it gets...')
observable.subscribe({
    next: data => {
        sum += data.n;
        console.log(`subscriber2: sum=${sum} , text=${data.text}`);
    },
    error: (err) => console.log('subscriber 2: ' + err)
});

console.log('registering subscriber3 which checks for even/odd numbers...')
observable.subscribe(data => {
    const n = data.n;

    if (n % 2 == 0) {
        console.log(`subscriber3: ${n} is even!`);
    } else {
        console.log(`subscriber3: ${n} is odd!`);
    }
});
