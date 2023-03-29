import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  implements OnInit{
  faArrowRight = faArrowRight;
  email:string  = "";
  password:string = "";

  ngOnInit():void{}

  constructor(private router:Router){}

  loginUser():void{
    this.router.navigate(['dashboard', {email:this.email}])
         console.log(`user with the following credential just login email: ${this.email} and password: ${this.password}`)
  }

}
//https://therichpost.com/angular-12-showing-postgresql-data-using-nodejs-express-web-api/