import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.css'],
  providers: [AuthService]
})
export class LoginTestComponent implements OnInit {

  public user: User = new User();
  
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loginWithGoogle(){
    this.auth.loginWithGoogle().then((data) => {
      console.log(data);
      console.log(data.user.displayName);
      console.log(data.user.photoURL);
    });
  }

  logout(){
    this.auth.logout().then((data) => {
      console.log(data);
    });
  }

}
