import { Component, OnInit,  } from '@angular/core';
import { NgForm,ValidatorFn, AbstractControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  providers:[AuthService]
})
export class SignupFormComponent  implements OnInit{
  faArrowRight = faArrowRight;
  passwordconfirm ="";
  showSuccessMessage: boolean;
  serverErrorMessage:string;
  activ_date =  new Date().toLocaleString();
  url_expression = '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})' ;
  email_expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 
  constructor(public auth: AuthService, private router:Router){
    this.serverErrorMessage = '';
    this.showSuccessMessage = false;

  }

  ngOnInit(): void {
    this.auth.selectedAdmin.activ_date = this.activ_date;

  }
  

 //https://stackblitz.com/edit/angular-ivy-eqbltt?file=src%2Fapp%2Fservices%2Fcustomvalidation.service.ts,src%2Fapp%2Ftemplate-driven-form%2Ftemplate-driven-form.component.html


  createadmin(form:NgForm){
    this.auth.createAdmin(form.value).subscribe(
    res=>{
      this.showSuccessMessage=  true;
      setTimeout(()=> this.showSuccessMessage = false, 4000)
      this.resetForm(form);
    },

    err => {
      if(err.errors){
        this.serverErrorMessage = err.error.join('<br/>')
      } else this.serverErrorMessage = "Something went wrong contact the admin"
    }
    )
   
  }

  resetForm(form:NgForm){
    this.auth.selectedAdmin = {
      admin_name:"" ,
      username:"" ,                               
      twitter_url:"",                    
      linkedin_url:"",  
      facebook_url:"",               
      email:"",                 
      admin_password:"",               
      //avatar:"", //{data:Buffer,contentType:string }  
      activ_date: "",              
      superuser:false
    };

    form.resetForm();
    this.passwordconfirm  = "";
    this.serverErrorMessage = "";
  }
}


