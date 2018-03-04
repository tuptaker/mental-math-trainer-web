import { Component, OnInit, AfterViewInit, AfterViewChecked, Input, ViewChild, ContentChild, ViewChildren, QueryList } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LoginView } from '../login-view/login-view.component';
import { RegistrationView } from '../registration-view/registration-view.component';
import { AwaitingConfirmationView } from '../awaiting-confirmation-view/awaiting-confirmation-view.component';
import { MMTUser } from '../m-m-t-user';

@Component({
  selector: 'main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
  providers: []
})
export class MainView implements OnInit {
  @ViewChild('loginView') set loginView(loginVC: LoginView) {
    if (loginVC != null) {
      loginVC.presentingView = this;
    }
  }

  @ViewChild('registrationView') set registrationView(registrationVC: RegistrationView) {
    if (registrationVC != null) {
      registrationVC.presentingView = this;
    }
  }

  @ViewChild('awaitingConfirmationView') set awaitingConfirmationView(awaitingConfirmationVC: AwaitingConfirmationView) {
    if (awaitingConfirmationVC != null) {
      awaitingConfirmationVC.presentingView = this;
    }
  }

  isCreatingAccount: boolean;
  viewingLogin: boolean;
  isLoggedIn: boolean;
  viewingRegistration: boolean;
  awaitingConfirmation: boolean;
  isLoadingData: boolean;
  didAttemptToFetchInitialContent: boolean;

  constructor(private authenticationService: AuthenticationService) {
    //this.isLoadingData = true;
    this.isLoadingData = false;
    this.viewingLogin = true;
    this.viewingRegistration = false;
    this.isLoggedIn = false;
    this.awaitingConfirmation = false;
    this.didAttemptToFetchInitialContent = false;
   }

  ngOnInit() {
    /*
    this.fetchInitialData();
    */
  }

  ngAfterViewChecked() {
    if (this.didAttemptToFetchInitialContent == false) {
//      this.fetchInitialData();
    }
  }

  fetchInitialData() {
    var currentUser: MMTUser = JSON.parse(localStorage.getItem('currentMMTUser'));
    if((currentUser != null) && (currentUser.authToken != null)) {
      this.isLoggedIn = true;
    }

    if (this.isLoggedIn == true) {
      this.didAttemptToFetchInitialContent = true;
      /*
      make call to your service that fetches all your conent and set isLoadingData flag to false
       */
    }
  }

  currentMMTUsername() {
    var username = JSON.parse(localStorage.getItem('currentMMTUser')).username;
    return username;
  }

  logOut() {
    this.authenticationService.logout().subscribe((response) => {
      switch(response.status) {
        case 200:
        var detailMsg = JSON.parse(response._body).detail;
        if (detailMsg == "Successfully logged out.") {
          console.log(detailMsg);
          localStorage.removeItem('currentMMTUser');
          this.isLoggedIn = false;
          this.viewingLogin = true;
          this.viewingRegistration = false;
          this.awaitingConfirmation = false;
          this.didAttemptToFetchInitialContent = false;
        }
        break;
        default:
        console.log("Failed to log out.");
        break;
      }
    })
    return;
  }

}
