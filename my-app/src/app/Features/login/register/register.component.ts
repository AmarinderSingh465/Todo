import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
 
  constructor(private router: Router, private auth: AngularFireAuth) {}

  async register() {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(
        this.email,
        this.password
      );
      console.log(userCredential);
      this.router.navigate(['/']);
    } catch (err) {
      console.error(err);
    }
  }

  login() {
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
  }

}
