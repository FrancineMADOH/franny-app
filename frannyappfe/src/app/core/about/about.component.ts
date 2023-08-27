import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  emailInfos!:FormGroup;
  responseMessage!:string;
  messageSent!:boolean;

  constructor(private core:CoreService, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.messageSent = false
    //contactFranny
    this.emailInfos = this.formBuilder.group({
      from:["",Validators.required],
      text:["",Validators.required]
    });

  }


  sendMessage(){
    if(this.emailInfos.valid){
      const infos = {
        from: this.emailInfos.value.from,
        text: this.emailInfos.value.text
      }
      console.log(infos)
      this.core.contactFranny(infos).subscribe((res)=>{
        console.log(res)
        this.responseMessage = res.message;
        return this.responseMessage;
      });
      setTimeout(() => {
        this.messageSent = true;
      }, 2000);
    }
    this.emailInfos.reset();
  }

}
