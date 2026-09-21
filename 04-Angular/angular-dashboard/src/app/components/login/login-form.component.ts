import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    imports: [FormsModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  email: string = 'user@mail.com';
  password: string = '123456';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  authenticate() {
    this.authService.login(this.email, this.password).subscribe((ok) => {
      if (ok) {
        this.router.navigate(['dashboard']);
      } else {
        this.errorMessage = 'Something went wrong.';
      }
    });
  }
}