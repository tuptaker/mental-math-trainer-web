import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MMTUser } from '../m-m-t-user';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-confirm-registration-view',
  templateUrl: './confirm-registration-view.component.html',
  styleUrls: ['./confirm-registration-view.component.css']
})
export class ConfirmRegistrationView implements OnInit {
  verificationID: string;
  isVerified: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.verificationID = "";
    this.isVerified = false;
    this.route.params.subscribe(params => {
      this.verificationID = params.id;
    });
  }

  ngOnInit() {
  }

  verify() {
    this.authenticationService.verifyAccount(this.verificationID)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          if (data.detail == "Successfully confirmed email.") {
            this.isVerified = true;
          }

          //var currentUser = new MMTUser(this.username, this.emailAddress, data.key);
          //localStorage.setItem('currentMMTUser', JSON.stringify(currentUser));
          //this.presentingView.isLoggedIn = true;
        },
        err => console.log(err)
      );
  }

  goToLogin() {
    this.router.navigateByUrl('/main-view');
  }

}
