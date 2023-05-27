import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beautifyer',
  templateUrl: './beautifyer.component.html',
  styleUrls: ['./beautifyer.component.css']
})
export class BeautifyerComponent implements OnInit {

  @ViewChild("searchbeautifyer", {static:true}) searchbeautifyer:any;

  constructor(private router:Router){}

  ngOnInit(): void {
    
  }
  gotoAddBeautifyerPage(){
    this.router.navigate(['beauty/beautifyers/add'])
  }

  searchBeautifyerTerm(searchbeautifyer:any){
    this.searchbeautifyer.reset();
  }

}
