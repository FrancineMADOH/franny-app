import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rendezvous } from '../../models/rdv';
import { Prestation } from '../../models/prestation';
import { Location } from '../../models/location';
import { BeautyService } from '../../services/beauty.service';
import { SelectServiceService } from '../../services/select-service.service';
import generaterdvCode from 'src/app/shared/utils/rdvcode';
@Component({
  selector: 'app-rdv-form',
  templateUrl: './rdv-form.component.html',
  styleUrls: ['./rdv-form.component.css']
})
export class RdvFormComponent implements OnInit {
  id!:string;
  iscreateMode!:boolean;
  rdvCode = "";
  rdv!: Rendezvous;
  prestations:Prestation[] = [];
  seance = [ "Classic","Gold","Premium" ];
  appointment_type =  ["Personnel","Familial","Evenement","Entreprise"];
  appointment_state = ["Ongoing","Completed","Cancelled"];
  allLocation:Location [] = [];
  allVille:any= [];
  categories = ["Coiffure","Onglerie","Make-Up","Massage","Soins du visage"];

  @ViewChild ("addRendezvousForm", {static:true}) addRendezvousForm:any;
  constructor(private router:Router,
              private route:ActivatedRoute,
              private beauty:BeautyService,
              private select:SelectServiceService
              ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.iscreateMode = !this.id;

    //load ville
    this.select.getAllLocation().subscribe(
      (location:Location[])=>{
        this.allLocation =   location.map((el:Location)=>{
          return el
        });
      });
      this.select.getAllVille().subscribe((el)=>{
        this.allVille = el.map((a)=>{
          return a;
        })
      });

    //load prestations
    this.beauty.getPrestationList().subscribe((res)=>{
      res.map((pres)=>{
        return this.prestations.push(pres);
         //this.prestations;
      });
    });
  }

  onSubmit():void{
    if(this.iscreateMode){
      this.saveRendezVous(this.addRendezvousForm)
    }else{
      this.updateRdv(this.addRendezvousForm)
    }
  }
  saveRendezVous(addRendezvousForm:any){
    this.rdvCode = generaterdvCode(
    this.addRendezvousForm.value.clientname,
    this.addRendezvousForm.value.rdvdate,
    this.addRendezvousForm.value.ville,
    this.addRendezvousForm.value.quartier,
    this.addRendezvousForm.value.category,
    this.addRendezvousForm.value.rdvtype
    );
    this.addRendezvousForm.value.rdvcode  = this.rdvCode;

    if(addRendezvousForm.valid){
      this.rdv =  this.addRendezvousForm.value;
      this.beauty.createRendezvous(this.rdv).subscribe((res:any)=>{
        alert(res.message);
        this.router.navigate(['/beauty/rendezvous'])
        // if(this.iscreateMode){
        //   this.router.navigate(['/beauty/rendezvous'])
        // } else{
        //   this.router.navigate(['/beauty/rendezvous/confirmation'])
        // }
      })
    }
    this.addRendezvousForm.reset();
  }

  updateRdv(addRendezvousForm:any){}
  backToRdv(){
    this.router.navigate(['beauty/rendezvous'])
  }

  viewRdv(){
    this.router.navigate(['beauty/rdv'])
  }

}
