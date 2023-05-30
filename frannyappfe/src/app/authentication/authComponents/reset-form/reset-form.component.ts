import { HttpClient, HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {
  faArrowRight = faArrowRight;
  resetForm!: FormGroup;
  email:string = "";
  newPassword:string = "";
  newPasswordConfirm:string = "";   
  
  constructor(private router:Router, private fb: FormBuilder, private http: HttpClient, private auth: AuthService){}

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ["Email is required", Validators.required],
      password: ["Password is required", Validators.required,Validators.minLength],
    })
  }


checkMactchingPassword():void{
    
  }

  resetPassword(){
    const formValue = this.resetForm.value;
    this.auth.resetPassword(formValue.email, formValue.password).subscribe({
      next: (res)=>{}, error: (err)=>{
        this.router.navigate(["/login"])
      }
    })
  }

 resetFormValues(){}
}

 

 


