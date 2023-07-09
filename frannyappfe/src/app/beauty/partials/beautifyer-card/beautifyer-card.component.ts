import { Component, Input,OnInit } from '@angular/core';
import { Beautifyer } from '../../models/beautifyer';
import { BeautyService } from '../../services/beauty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beautifyer-card',
  templateUrl: './beautifyer-card.component.html',
  styleUrls: ['./beautifyer-card.component.css']
})
export class BeautifyerCardComponent implements OnInit {
  beautifList:any= [];
constructor(private beau: BeautyService, public router: Router){}

ngOnInit():void{
  this.beau.getBeautifyerList().subscribe((res:any[])=>{
    res.map((el)=>{
      this.beautifList.push(el);
      return this.beautifList;  
    })
  }); 
}

gotoUpdate(el:number){
  this.router.navigate(["beauty/beautifyers/update/" + el]);

}

}
