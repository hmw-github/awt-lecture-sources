import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from "./hello/hello";

@Component({
  selector: 'app-root',
  imports: [Hello],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'demo1';
}
