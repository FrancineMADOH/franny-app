import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BeautyService } from '../services/beauty.service';
import { SelectServiceService } from '../services/select-service.service';
import { Prestation } from '../models/prestation';
import generaterdvCode from 'src/app/shared/utils/rdvcode';
import { Rendezvous } from '../models/rdv';

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
  confirmation_step = false;
  step = 1;

  category!:string;
  prestation!:Prestation;
  pres_id!:string
  rdvdate!:string;
  rdvcode!:string;
  rdv!:any;
  rdvfromServer!:any;

  presAvailable =  false;

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private beauty: BeautyService,
    private select:SelectServiceService
    ){}

  ngOnInit(): void {
    this.pres_id = this.route.snapshot.params['id'];
    this.category = this.route.snapshot.params['category'];
    //get all yaounde location
    this.select.getAllLocation().subscribe((data:any)=>{
      this.AllQuartier = data.map((item:any)=>{
        return item.quartier ;
      });
    });

    //display prestation
    setTimeout(() => {
      this.presAvailable = true;  
    }, 1000);
    
    //get the current prestation
    this.beauty.getPrestation(Number(this.pres_id)).subscribe((pres:any)=>{
      this.prestation = pres;
    console.log(this.prestation)});

    //personnal details form
    this.personalDetails = this.formBuilder.group({
      client_name:['',Validators.required],
      client_phone:[null,Validators.required],
      client_email:[""],
      ville:["",Validators.required],
      quartier:["",Validators.required]
    });

    //services details form
    this.serviceDetails = this.formBuilder.group({
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
      setTimeout(() => {
        this.step++;
      }, 1000);
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
     //this.service_step = true;
    if(this.serviceDetails.valid){
    this.rdvdate = this.serviceDetails.value.rdvdate + " "+ this.serviceDetails.value.rdvtime;
    //generate rdv code 
    this.rdvcode = generaterdvCode(
        this.personalDetails.value.client_name,
        this.rdvdate,
        this.personalDetails.value.ville,
        this.personalDetails.value.quartier,
        this.prestation.title
      );
    }
    this.rdv = {
          client_name: this.personalDetails.value.client_name ,
          client_phone:this.personalDetails.value.client_phone,
          client_email:this.personalDetails.value.client_email,
          rdvdate:this.rdvdate,
          prestation:this.pres_id,
          category:this.category,
          rdvcode:this.rdvcode,
          rdvtype:this.serviceDetails.value.rdvtype,
          rdv_price:this.serviceDetails.value.rdv_price,
          ville:this.personalDetails.value.ville ,
          quartier:this.personalDetails.value.quartier ,
          comments: this.serviceDetails.value.comments,
    }
    //save rdv to the database
    this.beauty.createRendezvous(this.rdv).subscribe((res:any)=>{
      console.log(res);
      this.rdvfromServer = res.data;
    });

    this.personalDetails.reset();
    this.serviceDetails.reset();
    this.confirmation_step = true;

  }

  backToPrestation(){}

}

//https://mdbootstrap.com/docs/b4/jquery/plugins/rating/
