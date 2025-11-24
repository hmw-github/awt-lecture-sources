import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HelloComponent
  ],
  template: `
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title = 'demos';
}