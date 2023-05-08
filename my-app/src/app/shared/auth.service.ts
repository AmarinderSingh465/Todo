import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;

  constructor(private fireauth: AngularFireAuth, private router: Router) {
    const token = localStorage.getItem('token');
    this.loggedIn = !!token;
  }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem('token', 'true');
        this.loggedIn = true;
        this.router.navigate(['/List']);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.loggedIn = false;
      this.router.navigate(['/login']);
    }).catch((err) => {
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
        alert(err.message);
        this.router.navigate(['/register']);
      });
  }
}
