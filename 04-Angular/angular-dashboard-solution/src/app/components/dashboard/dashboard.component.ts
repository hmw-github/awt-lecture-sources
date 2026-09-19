import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-dashboard',
    imports: [LogoComponent, RouterOutlet, RouterModule],
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, private authService: AuthService) {
  }

  gotoLanding() {
    this.authService.signOut();
    this.router.navigate(['']);
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
}