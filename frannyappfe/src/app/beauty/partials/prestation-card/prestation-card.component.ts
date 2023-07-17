import { Component,Input,OnInit } from '@angular/core';
import { Prestation } from '../../models/prestation';
import { Router } from '@angular/router';
import { BeautyService } from '../../services/beauty.service';

@Component({
  selector: 'app-prestation-card',
  templateUrl: './prestation-card.component.html',
  styleUrls: ['./prestation-card.component.css']
})
export class PrestationCardComponent implements OnInit {

  //@Input() prestationCard!:Prestation;
  prestationList:Prestation[] = [];

  constructor(private router:Router, private beauty:BeautyService){}

  ngOnInit(): void {
    this.beauty.getPrestationList().subscribe((data)=>{
      data.map((el)=>{
        this.prestationList.push(el);
        return this.prestationList;
      })
    })

  }

  gotoUpdate(el:number){
    this.router.navigate(['beauty/prestations/update/' + el])
  }

}
