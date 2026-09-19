import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { LoginFormComponent } from './login-form.component';

@Component({
    selector: 'app-login',
    imports: [LogoComponent, LoginFormComponent],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './login.component.html'
})
export class LoginComponent {
}