import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
 
  constructor(private router: Router, private auth: AuthService) {}

  register() {
    
    if(this.email ==''){
    alert('enter all values!')
    return;
  }
    if(this.password ==''){
      alert('enter all values!')
      return;
    }
    this.auth.register(this.email,this.password);
    this.email='';
    this.password='';
  }
  ngOnInit(): void {
  }
}
