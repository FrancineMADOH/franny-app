import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BeautyService } from '../services/beauty.service';
import { SelectServiceService } from '../services/select-service.service';

@Component({
  selector: 'app-book-prestation',
  templateUrl: './book-prestation.component.html',
  styleUrls: ['./book-prestation.component.css']
})
export class BookPrestationComponent implements OnInit {

  appointment_type =  ["Personnel","Familial","Evenement","Entreprise"];
  AllQuartier=[]

  personalDetails!: FormGroup;
  serviceDetails!: FormGroup;

  personal_step = false;
  service_step = false;
  step = 1;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private beauty: BeautyService,
    private select:SelectServiceService
    ){}

  ngOnInit(): void {
    this.select.getAllLocation().subscribe((data:any)=>{
      this.AllQuartier = data.map((item:any)=>{
        return item.quartier ;
      })
    })
    this.personalDetails = this.formBuilder.group({
      client_name:['',Validators.required],
      client_phone:[null,Validators.required],
      client_email:[""],
      ville:["",Validators.required],
      quartier:["",Validators.required]
    });

    this.serviceDetails = this.formBuilder.group({
      prestation:["",Validators.required],//int
      category:["",Validators.required],
      rdvtype:["",Validators.required],
      rdv_price:[null,Validators.required],
      rdvdate:[null,Validators.required],
      rdvtime:["",Validators.required],
      comments:["",Validators.required]

    });
    
  }
//get the form values
  get personal(){
    return this.personalDetails.controls;
  }

  get service(){
    return this.serviceDetails.controls;
  }
  //switch steps forward
  nextStep(){
    if(this.step == 1){
      this.personal_step =  true;
      if(this.personalDetails.invalid){ return}
      this.step ++;
    }

    if(this.step==2){
      this.service_step = true;
      this.personal_step =  false;
      if(this.serviceDetails.invalid){return }
      this.step++;
    }
  }

  //switch steps backward
  previousStep(){
    this.step--;
    if(this.step==1){
      this.personal_step =  false;
    }
  }

  //submit the form 
  onSubmit(){
    //console.log(this)
    this.service_step = true;
    if(this.serviceDetails.invalid){return}
    console.log(this.personalDetails.value);
  console.log(this.serviceDetails.value);
  }

  backToPrestation(){}

}
