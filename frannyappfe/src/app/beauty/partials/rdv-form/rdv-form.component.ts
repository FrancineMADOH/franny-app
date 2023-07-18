import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rdv-form',
  templateUrl: './rdv-form.component.html',
  styleUrls: ['./rdv-form.component.css']
})
export class RdvFormComponent implements OnInit {
  id!:string;
  iscreateMode!:boolean;
  @ViewChild ("addRendezvousForm", {static:true}) addRendezvousForm:any;
  constructor(private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.iscreateMode = !this.id;
    
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
