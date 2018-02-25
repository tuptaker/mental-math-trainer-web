import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MMTUser } from '../m-m-t-user';

@Component({
  selector: 'app-confirm-registration-view',
  templateUrl: './confirm-registration-view.component.html',
  styleUrls: ['./confirm-registration-view.component.css']
})
export class ConfirmRegistrationView implements OnInit {
  verificationID: string;

  constructor(private authenticationService: AuthenticationService) {
    this.verificationID = "";
  }

  ngOnInit() {
  }

  verify() {
    this.authenticationService.verifyAccount(this.verificationID)
    .map( res => res.json())
    .subscribe(
      data => {
        //var currentUser = new MMTUser(this.username, this.emailAddress, data.key);
        //localStorage.setItem('currentMMTUser', JSON.stringify(currentUser));
        //this.presentingView.isLoggedIn = true;
      },
      err => console.log(err)
    );
  }

}
