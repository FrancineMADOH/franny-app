import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-prestation',
  templateUrl: './view-prestation.component.html',
  styleUrls: ['./view-prestation.component.css']
})
export class ViewPrestationComponent implements OnInit {

  ngOnInit(): void {
    
  }
  constructor(private router: Router){}

  gotoUpdate(el:number){
    this.router.navigate(['beauty/prestations/update/' + el])
  }

}
