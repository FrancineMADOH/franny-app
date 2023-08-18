import { Component,OnInit } from '@angular/core';
import { Rendezvous } from '../../models/rdv';
import { BeautyService } from '../../services/beauty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rdv-card',
  templateUrl: './rdv-card.component.html',
  styleUrls: ['./rdv-card.component.css']
})
export class RdvCardComponent implements OnInit{

  rdvList:Rendezvous[] = []; 
  filteredrdvList:Rendezvous[] = [];
  CancelApt = "Cancelled";
  schedApt= "Scheduled"
  OnApt= "Ongoing"
  complApt= "Completed"
  constructor(private router:Router , private beauty:BeautyService){
        this.filteredrdvList = this.rdvList;

  }

  ngOnInit(): void {
    this.beauty.getRendezvousList().subscribe((res)=>{
      res.map((data)=>{
        this.rdvList.push(data);
        return this.rdvList;
      })
    })
    
  }

  gotoUpdate(id:number){
    this.router.navigate(["/beauty/rendezvous/update/"+id])
  }
  gotoAssign(id:number){
    this.router.navigate(["/beauty/rendezvous/assign/"+id])
  }
  gotoCancel(id:number){
    this.router.navigate(["/beauty/rendezvous/cancel/"+id])
  }
  gotoPayment(id:number){
    this.router.navigate(["/beauty/rendezvous/payment/"+id])
  }

}
