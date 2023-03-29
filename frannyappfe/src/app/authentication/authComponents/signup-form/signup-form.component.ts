import { Component, OnInit,  } from '@angular/core';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  implements OnInit{
  faArrowRight = faArrowRight;
  fullname:string="";
  username:string ="";
  twitter_url:string= '';
  facebook_url:string ="";
  linkedin_url:string = '';
  email:string = "";
  password:string="";
  passwordconfirm:string ="";
  //avatar:File ;

  constructor(){}

  ngOnInit(): void {
    
  }

  checkPasswordMatch(){}
  backToLogin(){}
}
