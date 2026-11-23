import { NgStyle } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Form, FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    imports: [
        FormsModule,
        NgStyle
    ],
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  emailAddress: string = '';
  message: string = '';
  color: string = 'white';

  constructor(private router: Router) {
  }

  keyup(): void {
    this.message = '';
  }

  keys(form: any): string[] {
    return Object.keys(form.controls);
  }

  login(form: NgForm): void {
    if (this.username === 'Hugo' && this.password === '123') {
      this.message = 'Hooray!';
    } else {
      this.message = 'Invalid username/password combination!';
    }
    // parameter may be used to access controls, e.g.
    //    form.controls['uname'].status;
  }

  cancel(): void {
    this.router.navigate(['menu']);
  }
}