import { Injectable } from '@angular/core';
import { MMTUser } from './m-m-t-user';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class AuthenticationService {
  private mmtUser: MMTUser;

  constructor(private _http:Http) { 
  }

  login(username: string, email: string, password: string):Observable<any> {
    return this._http.post(environment.apiHost + "/rest-auth/login/",
    { username:username, email:email, password:password});
  }

  logout():Observable<any> {
    return this._http.post(environment.apiHost + "/rest-auth/logout/", null);
  }

  changePassword():Observable<any> {
    return;
  }

  updateUserInfo():Observable<any> {
    return;
  }

  registerAccount(username: string, password: string, passwordConfirm:string, email:string):Observable<any> {
    return this._http.post(environment.apiHost + "/rest-auth/registration", {username: username, password1:password, password2: passwordConfirm, email:email});
  }

  sessionIsActive():Observable<any> {
    return;
  }

}
