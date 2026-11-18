import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
  standalone: true
})
export class Login {
  user: string = 'Anna Miller';
  username: string = 'Anna';
  password: string = '123';
  message: string = '';
  attempts: string[] = []; 

  checkLogin(): void {
    this.attempts.push(`${this.username}/${this.password}`);
    if (this.username == 'Anna' && this.password == '123') {
      this.message = 'You are logged in!';
    } else {
      this.message = 'Invalid credentials!';
    }
  }
}
