import { Injectable } from '@angular/core';

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