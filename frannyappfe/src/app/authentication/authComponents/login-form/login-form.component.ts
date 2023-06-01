import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, NgForm, Validator, Validators, } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  implements OnInit{
  faArrowRight = faArrowRight;
  loginForm!: FormGroup 
  message = "";

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

  constructor(private formbuilder: FormBuilder,private router:Router, private auth: AuthService){
  }

  ngOnInit():void{
   this.loginForm = this.formbuilder.group({
    email: ["", Validators.required],
    admin_password:["", Validators.required]
   });  
  }
  
  singinAdmin(){
    const formValue = this.loginForm.value ;
    this.auth.signtheUserIn(formValue.email, formValue.admin_password).subscribe({
      next: 
      (res)=>{
        console.log(res);
        this.router.navigate(["/dashboard"])
      }, error:(err)=>{
        this.message = "wrong credentials"
      }
    })
  }
  resetForm(){}

 


}
//https://therichpost.com/angular-12-showing-postgresql-data-using-nodejs-express-web-api/