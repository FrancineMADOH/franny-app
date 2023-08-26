import { Component, OnInit, ViewChild,OnDestroy,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BeautyService } from '../services/beauty.service';
import { SelectServiceService } from '../services/select-service.service';
import domToImage from 'dom-to-image';
import jsPDF, { jsPDFOptions } from 'jspdf';
import moment from 'moment';
import { Prestation } from '../models/prestation';
import generaterdvCode from 'src/app/shared/utils/rdvcode';
//https://medium.com/@vkbiotech841/how-to-export-html-to-pdf-file-in-angular-2e92ceb7755d

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
  host = window.location.host;
  url!:string;
  rdvfromServer!:any;
  qrCode:any;

  presAvailable =  false;
  pdfName = "Carte Rendez-vous";
  showconfirm = false;
  


  constructor(private formBuilder:FormBuilder,
    private beauty: BeautyService,
    private select:SelectServiceService,
    private router:Router,
    private route:ActivatedRoute,
    
    ){}

  @ViewChild('dataToExport',  { read: ElementRef,static: false }) public dataToExport!:ElementRef;

  ngOnInit(): void {
    this.pres_id = this.route.snapshot.params['id'];
    this.category = this.route.snapshot.params['category'];
     //get the current prestation
    this.beauty.getPrestation(Number(this.pres_id)).subscribe((pres:any)=>{
      this.prestation = pres;
  });
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
          url: `${this.host}/beauty/rendezvous/payment/`
    }
    //save rdv to the database
    this.beauty.createRendezvous(this.rdv).subscribe((res:any)=>{
      this.rdvfromServer = res.data;
      this.qrCode =  res.qrcode
    });
  
    this.personalDetails.reset();
    this.serviceDetails.reset();
    this.showconfirm = true;
    setTimeout(() => {
      this.showconfirm = false;
    }, 1000);
    this.confirmation_step = true;

  }
  backToPrestation(){}
  
  //generate pdf from rdv card
  

  public downloadAsPdf(): void {
    //get the html element to convert and set properties
    const width = this.dataToExport.nativeElement.clientWidth;
    const height = this.dataToExport.nativeElement.clientHeight + 40;
    //let orientation:jsPDFOptions["orientation"] = '' ;
    let orientation: "p" | "portrait" | "l" | "landscape" | undefined
    //let imageUnit = 'pt';
    if (width > height) {
    orientation = 'l';
    } else {
    orientation = 'p';
    }
    //convert html to image 
    domToImage
    .toPng(this.dataToExport.nativeElement, {
    width: width,
    height: height
    })
    .then(result => {
      //from image to pdf
    let jsPdfOptions:jsPDFOptions = {
    orientation: orientation,
    unit: "pt",
    format: [width + 50, height + 220]
    };
    const pdf = new jsPDF(jsPdfOptions);
    pdf.setFontSize(14);
    pdf.setTextColor('#2585fe');
    pdf.text(this.pdfName ? this.pdfName.toUpperCase() : 'Untitled dashboard'.toUpperCase(), 25, 75);
    pdf.setFontSize(14);
    pdf.setTextColor('#131523');
    pdf.text('Date: ' + moment().format('ll'), 25, 25);
    pdf.addImage(result, 'PNG', 25, 185, width, height); //TODO: Ajuster plus tard dans le css
    pdf.save(this.rdvfromServer.rdvcode + '.pdf');
    })
    .catch(error => {
      console.log("An error occurred: " + error)
    });
    }
}

//https://mdbootstrap.com/docs/b4/jquery/plugins/rating/
//https://medium.com/@vkbiotech841/how-to-export-html-to-pdf-file-in-angular-2e92ceb7755d