import { Component } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { LoginFormComponent } from './login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent, LoginFormComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
}