import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rdv-form',
  templateUrl: './rdv-form.component.html',
  styleUrls: ['./rdv-form.component.css']
})
export class RdvFormComponent implements OnInit {
  @ViewChild ("addRendezvousForm", {static:true}) addRendezvousForm:any;
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }

  saveRendezVous(addRendezvousForm:any){
    this.addRendezvousForm.reset();
  }
  backToRdv(){
    this.router.navigate(['beauty/rendez-vous'])
  }
  viewRdv(){
    this.router.navigate(['beauty/rdv'])
  }

}
