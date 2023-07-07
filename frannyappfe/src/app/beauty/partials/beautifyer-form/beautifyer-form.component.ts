import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SelectServiceService } from '../../services/select-service.service';
import { Location } from '../../models/location';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { Admin } from 'src/app/authentication/models/admin';

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

  constructor(private router:Router, private select:SelectServiceService, private auth: AuthService ) {
    }

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
    //this.loginForm.value.email;
    console.log(this.addBeautifForm.value.bname); 
    console.log(this.addBeautifForm.value.ville);
    console.log(this.addBeautifForm.value.quartier);
    console.log(this.addBeautifForm.value.recruit_date);
    //this.addBeautifForm.reset()
  }

}
