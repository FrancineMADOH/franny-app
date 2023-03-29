import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
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
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule 
  ],
  exports: [
    LoginFormComponent,
    SignupFormComponent,
    ResetFormComponent,
    DashboardComponent
  ]
})
export class AuthenticationModule {
  constructor(){
   
  }
 }
