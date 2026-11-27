import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Minimal example, run with `tsx min-example.ts`

// produce numbers 1, 2, 3, one at a time
const numbers$ = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.error('error!');
  subscriber.complete();
});

numbers$
  // filter odd numbers and multiply by 10
  .pipe(
    filter(n => (n % 2) === 1),
    map(n => n * 10)
  )
  // now receive number or error
  .subscribe({
    next: v => console.log(v),        // 10, 30
    error: (err) => console.error(err),
    complete: () => console.log('done')
  });