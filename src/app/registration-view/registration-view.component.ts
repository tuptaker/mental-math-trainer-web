import { Component, OnInit } from '@angular/core';
import { MainView } from '../main-view/main-view.component';
import { AuthenticationService } from '../authentication.service';
import 'rxjs/add/operator/catch';
import { MMTUser } from '../m-m-t-user';

@Component({
  selector: 'registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.css']
})
export class RegistrationView implements OnInit {
  presentingView: MainView;
  weakPWLabel: string;
  mediumPWLabel: string;
  strongPWLabel: string;
  firstPWPrompotLabel: string;
  confirmPWPromptLabel: string;
  username; string;
  desiredPassword: string;
  desiredPasswordConfirmation: string;
  emailAddress: string;
  accountRegistrationFailed: boolean;
  verificationEmailSent: boolean;

  constructor(private authenticationService: AuthenticationService) {
    this.weakPWLabel = "This password is weak.";
    this.mediumPWLabel = "This password is ok, but could be stronger.";
    this.strongPWLabel = "This is a strong password.";
    this.firstPWPrompotLabel = "type password here.";
    this.confirmPWPromptLabel = "enter same password again to confirm.";
    this.accountRegistrationFailed = false;
    this.verificationEmailSent = false;
   }

  ngOnInit() {
  }

  showLoginView() {
    this.presentingView.viewingLogin = true;
    this.presentingView.viewingRegistration = false;
    this.presentingView.awaitingConfirmation = false;
  }

  createAccount() {
    this.accountRegistrationFailed = false;
    this.authenticationService.registerAccount(this.username, this.desiredPassword, this.desiredPasswordConfirmation, this.emailAddress)
    .map(res => res.json())
    .subscribe(
      data => {
        if (data.detail == "Verification e-mail sent.") {
          this.verificationEmailSent = true;
          this.accountRegistrationFailed = false;
          this.presentingView.viewingLogin = false;
          this.presentingView.viewingRegistration = false;
          this.presentingView.awaitingConfirmation = true;
        } else {
          this.accountRegistrationFailed = true;
          this.verificationEmailSent = false;
        }
        /*
        console.log(data.detail)
Verification e-mail sent.
        */
       /*
        var currentUser = new MMTUser(this.username, this.emailAddress, data.key);
        localStorage.setItem('currentMMTUser', JSON.stringify(currentUser));
        this.presentingView.isLoggedIn = true;
        */
      },
      err => {
        this.accountRegistrationFailed = true;
        console.log(err);
      }
    )
  }

}
