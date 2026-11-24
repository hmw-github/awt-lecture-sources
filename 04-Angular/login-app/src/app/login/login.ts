import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Attempt = {
  user: string, pwd: string
};

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
  standalone: true
})
export class Login {
  user: string = 'Anna Miller';
  username: string = '';
  password: string = '';
  message: string = '';
  attempts: Attempt[] = []; 
  disabled: string = 'disabled';

  checkLogin(): void {
    const attempt: Attempt = {
      user: this.username,
      pwd: this.password
    };
    this.attempts.push(attempt);
    if (this.username == 'Anna' 
        && this.password == '123') {
      this.message = 'You are logged in!';
      this.username = '';
      this.password = '';
    } else {
      this.message = 'Invalid credentials!';
    }
  }

  keyup(): void {
    this.disabled = (this.username != '' && this.password != '') ? 
      '' : 'disabled';
  }
}
