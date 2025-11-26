import { Component, effect, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div>
      <h2>Count: {{ count() }}</h2>
      <button (click)="increment()">+</button>
    </div>
  `
})
export class CounterComponent {
  @Input() count!: WritableSignal<number>;
  
  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }
  
  increment() {
    this.count.update((n: number) => n + 1);
  }
}