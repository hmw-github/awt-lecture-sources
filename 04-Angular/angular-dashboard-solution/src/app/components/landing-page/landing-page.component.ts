import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LogoComponent } from '../shared/logo/logo.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}