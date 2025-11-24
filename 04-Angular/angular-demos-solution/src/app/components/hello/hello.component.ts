import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hello',
    standalone: true,
    template: `
      <div class="container mt-3">
        <h2>Hello {{ name + '?' }}, {{ greeting }}!</h2>
        <p>Component with no extra html template file and no CSS file(s).</p>
        <p>Change attribute <strong>name</strong> and see what happens!</p>
        <p>
          <button class="btn btn-success" (click)="back()">back to menu...</button>
        </p>
      </div>
    `
})
export class HelloComponent {
  name: string = 'Anna';
  greeting: string = 'have a great wednesday!';

  public constructor(private router: Router) {
  }

  public back(): void {
      this.router.navigate(['menu']);
  }
}