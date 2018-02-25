import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { ToolbarModule, Dialog } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { DataTableModule, SharedModule, DialogModule, ButtonModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LoginView } from './login-view/login-view.component';
import { RegistrationView } from './registration-view/registration-view.component';
import { ConfirmRegistrationView } from './confirm-registration-view/confirm-registration-view.component';
import { MainView } from './main-view/main-view.component';
import { AuthenticationService } from './authentication.service';

const appRoutes: Routes = [
  { path: 'main-view', component: MainView },
  { path: 'verify-email/:id', component: ConfirmRegistrationView },
  { path: '', redirectTo: '/main-view', pathMatch: 'full'}
  /*,
  { path: '' }*/
];

@NgModule({
  declarations: [
    AppComponent,
    LoginView,
    RegistrationView,
    ConfirmRegistrationView,
    MainView
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ToolbarModule,
    InputTextModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    PasswordModule,
    FormsModule
  ],
  providers: [AuthenticationService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
