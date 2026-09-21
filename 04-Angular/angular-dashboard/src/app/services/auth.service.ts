import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus: boolean;

  constructor(private backendService: BackendService) {
    this.isLoggedInStatus = false;
    console.log('isLoggedInStatus: ' + this.isLoggedInStatus);
  }

  login(email: string, password: string): Observable<boolean> {
    const self = this;

    return new Observable(subscriber => {
      this.backendService.fetchUser(email)
      .subscribe((user) => {
        if (user != null) {
          // check password
          if (user.password === password) {
            self.isLoggedInStatus = true;
            console.log('isLoggedInStatus: ' + this.isLoggedInStatus);
            subscriber.next(true);
          } else {
            subscriber.next(false);
          }
        } else {
          subscriber.next(false);
        }
      });
    });
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }

  signOut() {
    this.isLoggedInStatus = false;
    console.log('isLoggedInStatus: ' + this.isLoggedInStatus);
  }
}