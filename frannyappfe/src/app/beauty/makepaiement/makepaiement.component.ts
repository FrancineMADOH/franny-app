import { Component, OnInit, ViewChild } from '@angular/core';
import { BeautyService } from '../services/beauty.service';
import { ActivatedRoute } from '@angular/router';
import { Rendezvous } from '../models/rdv';

@Component({
  selector: 'app-makepaiement',
  templateUrl: './makepaiement.component.html',
  styleUrls: ['./makepaiement.component.css']
})
export class MakepaiementComponent implements OnInit {
  id!:number;
  rdvstate ="Completed";
  rdv!:Rendezvous;
  isloading=true;
  @ViewChild("paymentForm",{static:true} )paymentForm:any;


  constructor(private  beauty:BeautyService, private route:ActivatedRoute){}


  ngOnInit(): void {
    setTimeout(() => {
      this.isloading = false;
    }, 1000);

    this.id = Number(this.route.snapshot.params['id']);
    this.beauty.getRendezvous(this.id).subscribe((data)=>{
      this.rdv = data;
      return this.rdv;
    });

    
  }

  makeCashPayment(paymentForm:any){
    paymentForm.value.rdvstate = this.rdvstate;

    if(paymentForm.valid ){
      this.beauty.makepaiement(this.id, this.rdvstate,paymentForm.value.pm).subscribe((res)=>{
        alert(res.message);
      })
      paymentForm.reset();
     }
  }

}
