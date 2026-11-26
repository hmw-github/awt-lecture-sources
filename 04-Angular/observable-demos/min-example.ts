import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Minimal example, run with `tsx min-example.ts`

const numbers$ = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

numbers$
  .pipe(
    filter(n => n % 2 === 1),
    map(n => n * 10)
  )
  .subscribe({
    next: v => console.log(v),        // 10, 30
    complete: () => console.log('done')
  });