import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SelectServiceService } from '../../services/select-service.service';
import { Location } from '../../models/location';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { Admin } from 'src/app/authentication/models/admin';
import generateBeautifCode from 'src/app/shared/utils/bcode';
import { BeautyService } from '../../services/beauty.service';
import { Beautifyer } from '../../models/beautifyer';

@Component({
  selector: 'app-beautifyer-form',
  templateUrl: './beautifyer-form.component.html',
  styleUrls: ['./beautifyer-form.component.css']
})
export class BeautifyerFormComponent implements OnInit {

  @ViewChild("addBeautifForm", {static: true}) addBeautifForm: any;

  allLocation:Location[] = [];
  allVille:any= [];
  allUsers: Admin[] = [];
  beautifCode = "";
  beautif!:Beautifyer;

  constructor(private router:Router,
               private select:SelectServiceService, 
               private auth: AuthService, 
               private beauti:BeautyService ) {}

  ngOnInit(): void {
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

      this.auth.getAllUsers().subscribe(
        (data:Admin[])=>{
          this.allUsers =   data.map((el:Admin)=>{
            return el
          });
        });
  }

 backtoBeautifList(){
    this.router.navigate(['beauty/beautifyers']);
  }
 
  saveBeautif(addBeautifForm:any){   
    this.beautifCode = generateBeautifCode(this.addBeautifForm.value.recruit_date,this.addBeautifForm.value.bname,this.addBeautifForm.value.ville,this.addBeautifForm.value.quartier); 
    this.addBeautifForm.value.beautifcode = this.beautifCode;
    this.addBeautifForm.value.create_by = parseInt((this.addBeautifForm.value.create_by));
    if(this.addBeautifForm.valid){
      this.beautif = this.addBeautifForm.value;
      this.beauti.addBeautifyer(this.beautif).subscribe((res)=>{
        alert(res.message);
        this.router.navigate(["beauty/beautifyers"]);
      });
    }
    this.addBeautifForm.reset()
  }

}
