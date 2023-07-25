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

  constructor(private router:Router , private beauty:BeautyService){
        this.filteredrdvList = this.rdvList;

  }

  ngOnInit(): void {
    this.beauty.getRendezvousList().subscribe((res)=>{
      res.map((data)=>{
        this.rdvList.push(data);
        console.log(this.rdvList);
        return this.rdvList;
      })
    })
    
  }

}
