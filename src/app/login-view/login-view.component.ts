import { Component, OnInit } from '@angular/core';
import { MainView } from '../main-view/main-view.component';
import { AuthenticationService } from '../authentication.service';
import { MMTUser } from '../m-m-t-user';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})

export class LoginView implements OnInit {
  presentingView: MainView;
  username: string;
  password: string;
  emailAddress: string;
  loginFailed: boolean;

  constructor(private authenticationService: AuthenticationService) {
    this.loginFailed = false;
   }

  ngOnInit() {
  }

  logIn() {
    this.loginFailed = false;
    this.authenticationService.login(this.username, this.emailAddress, this.password)
    .map( res => res.json())
    .subscribe(
      data => {
        var currentUser = new MMTUser(this.username, this.emailAddress, data.key);
        localStorage.setItem('currentMMTUser', JSON.stringify(currentUser));
        this.presentingView.isLoggedIn = true;
      },
      err => this.loginFailed = true
    );
  }

  showAccountRegistrationView() {
    this.presentingView.isCreatingAccount = true;
  }

}
