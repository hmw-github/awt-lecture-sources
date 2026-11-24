import { Injectable } from '@angular/core';

/**
 * Service for debouncing function calls, i.e. delaying the execution of a
 * callback until a certain time has passed without the function being called
 * again. Typical use case: a search field should not trigger a backend request
 * on every keystroke, but only once the user has stopped typing.
 *
 * How it works:
 * - Every call of `debounce()` starts a timer (`setTimeout`) that executes the
 *   callback after `delay` milliseconds (default: 300 ms).
 * - Timers are stored per `key`. If `debounce()` is called again with the same
 *   key before the timer has expired, the pending timer is cancelled
 *   (`clearTimeout`) and a new one is started. Only the last call within the
 *   delay window is actually executed.
 * - Different keys are independent of each other, so several inputs can be
 *   debounced in parallel with one service instance.
 * - Because the service is `providedIn: 'root'`, there is a single instance
 *   (singleton) shared by all components.
 *
 * Usage (paths relative to src/app/):
 * 1. Inject the service via the constructor:
 *      constructor(private debounceService: DebounceService) {}
 *
 * 2. Wrap the call to be debounced, e.g. in an input event handler:
 *      this.debounceService.debounce('search', () => {
 *        this.onSearch(value);
 *      }, 500); // execute 500 ms after the last keystroke
 *        -> components/shared/search/search.component.ts
 */
@Injectable({
  providedIn: 'root'
})
export class DebounceService {
  private timers: { [key: string]: any } = {};

  debounce(key: string, callback: () => void, delay: number = 300) {
    if (this.timers[key]) {
      clearTimeout(this.timers[key]);
    }

    this.timers[key] = setTimeout(() => {
      callback();
    }, delay);
  }
}