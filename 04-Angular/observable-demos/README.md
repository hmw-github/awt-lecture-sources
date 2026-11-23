# Infos see https://rxjs.dev/guide/observable
# Installation (see https://www.tutorialspoint.com/rxjs/rxjs_environment_setup.htm)

use `npm install`, this will install
    - npm install ---save-dev rxjs
    - npm install --save-dev esm

# Run demos

start demo1.js using `npm run demo1`

start demo2.js using `npm run demo2`

# What is an Observable?

An **Observable** (from RxJS, which Angular uses heavily) is a stream of values that arrive over time. A Promise gives you one value. An Observable can deliver any number of values: zero, one, many, or an endless stream.

**Key points:**

- **Producer/consumer model:** The Observable produces values, and a subscriber reacts to them through three callbacks:
  - `next(value)`: a new value arrived
  - `error(err)`: the stream failed and stops
  - `complete()`: the stream finished normally
- **Lazy:** Nothing runs until someone calls `subscribe()`. Each subscription normally starts its own run of the producer ("cold" Observable).
- **Cancelable:** `subscribe()` returns a `Subscription`, and calling `unsubscribe()` on it stops the stream and cleans up, for example timers or event listeners.
- **Composable with operators:** You transform streams declaratively with `pipe()` and operators such as `map`, `filter`, `debounceTime`, `switchMap` and `catchError`.
- **Used in Angular:** `HttpClient` requests, `Router` events, reactive form `valueChanges`, `EventEmitter`, and the `async` pipe in templates.

**Minimal example:**

```js
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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
```

**In one sentence:** An Observable is a lazy, cancelable stream of values over time that you can subscribe to and transform with operators.
