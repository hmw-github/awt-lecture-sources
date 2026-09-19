import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from "./hello/hello";

@Component({
  selector: 'app-root',
  imports: [Hello],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true
})
export class App {
  protected title = 'demo1';
}
