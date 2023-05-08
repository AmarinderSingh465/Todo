import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false; // Add a property to track login status

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem('token', 'true');
        this.loggedIn = true; // Set login status to true
        this.router.navigate(['/List']);
      })
      .catch((err) => {
        // An error occurred during login
        alert(err.message);
      });
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("register success!");
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        // An error occurred during registration
        alert(err.message);
        this.router.navigate(['/register']);
      });
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.loggedIn = false; // Set login status to false
      this.router.navigate(['/login']);
    }).catch((err) => {
      alert(err.message);
    });
  }
}
