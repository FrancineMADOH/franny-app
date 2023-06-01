import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SelectServiceService } from '../../services/select-service.service';
import { Location } from '../../models/location';

@Component({
  selector: 'app-beautifyer-form',
  templateUrl: './beautifyer-form.component.html',
  styleUrls: ['./beautifyer-form.component.css']
})
export class BeautifyerFormComponent implements OnInit {

  @ViewChild("addBeautifForm", {static: true}) addBeautifForm: any;

  allLocation:Location[] = [];

  constructor(private router:Router, private select:SelectServiceService) {
    }

  ngOnInit(): void {
    this.select.getAllLocation().subscribe(
      (location:Location[])=>{
        return  location.map((el:Location)=>{
          return el
        });
      });
  }

 backtoBeautifList(){
    this.router.navigate(['beauty/beautifyers']);
  }
  saveBeautif(addBeautifForm:any){
    this.addBeautifForm.reset()
  }

}
