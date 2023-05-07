import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
  }

  login() {
    
    if(this.email ==''){
    alert('enter all values!')
    return;
  }
    if(this.password ==''){
      alert('enter all values!')
      return;
    }
    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';
  }

  register() {
    this.router.navigate(['/register']);
  }
}
