import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rendezvous } from '../../models/rdv';

@Component({
  selector: 'app-view-rdv',
  templateUrl: './view-rdv.component.html',
  styleUrls: ['./view-rdv.component.css']
})
export class ViewRdvComponent implements OnInit {
  rdv!:Rendezvous;
  rdvList:Rendezvous[] = []; 
  filteredrdvList:Rendezvous[] = [];
  CancelApt = "Cancelled";
  schedApt= "Scheduled"
  OnApt= "Ongoing"
  complApt= "Completed"
  ngOnInit(): void {
    
  }
  constructor(private router:Router){}

  gotoUpdate(id:number){
    this.router.navigate(["/beauty/rendezvous/update/"+id]);
  }
  gotoView(el:number){
    this.router.navigate(["beauty/rendezvous/view/" + el]);
  }
  gotoAssign(id:number){
    this.router.navigate(["/beauty/rendezvous/assign/"+id]);
  }
  gotoCancel(id:number){
    this.router.navigate(["/beauty/rendezvous/cancel/"+id]);
  }
  gotoPayment(id:number){
    this.router.navigate(["/beauty/rendezvous/payment/"+id]);
  }
  gotoReview(id:number){
    this.router.navigate(["beauty/reviews/add/"+id]);
  }


}
