import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FormControl, Validator, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  implements OnInit{
  faArrowRight = faArrowRight;
  email:string  = "";
  password:string = "";

  

  constructor(private router:Router, private auth: AuthService  ){}
  ngOnInit():void{
    this.makeApiCall();
     
  }

  makeApiCall(){
    this.auth.getMainRoute().subscribe((data)=>{
      console.log(data)
      return data;
     })
  }

  loginUser():void{
    this.router.navigate(['dashboard', {email:this.email}])
         console.log(`user with the following credential just login email: ${this.email} and password: ${this.password}`)
  }

}
//https://therichpost.com/angular-12-showing-postgresql-data-using-nodejs-express-web-api/