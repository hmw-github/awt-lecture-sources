import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
    routing >
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title = 'demos';
}