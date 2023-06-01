import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestation-form',
  templateUrl: './prestation-form.component.html',
  styleUrls: ['./prestation-form.component.css']
})
export class PrestationFormComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  @ViewChild("addPrestationForm",{static:true})addPrestationForm:any ;

  savePrestation(addPrestationForm:any){}

  backToPrestation(){
    this.router.navigate(['beauty/prestations']);
  }

}
