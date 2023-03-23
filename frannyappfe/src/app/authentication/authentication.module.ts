import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './authComponents/login-form/login-form.component';
import { SignupFormComponent } from './authComponents/signup-form/signup-form.component';
import { ResetFormComponent } from './authComponents/reset-form/reset-form.component';
import { DashboardComponent } from './authComponents/dashboard/dashboard.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    ResetFormComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginFormComponent,
    SignupFormComponent,
    ResetFormComponent,
    DashboardComponent
  ]
})
export class AuthenticationModule { }
