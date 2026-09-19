import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterModule, RouterLink, RouterOutlet],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}