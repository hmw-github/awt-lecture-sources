import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CounterComponent } from "../counter.component";

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true
})
export class App {
    count = signal(0);
}
