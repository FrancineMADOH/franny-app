import { Component,OnInit, ViewChild } from '@angular/core';
import { BeautyService } from '../services/beauty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Beautifyer } from '../models/beautifyer';

@Component({
  selector: 'app-assignrdv',
  templateUrl: './assignrdv.component.html',
  styleUrls: ['./assignrdv.component.css']
})
export class AssignrdvComponent implements OnInit {

  BeautyfyerList: Beautifyer[] = [];
  id!:number;
  rdvstate="Ongoing";
  @ViewChild("assignrdvForm",{static:true} )assignrdvForm:any;

  constructor(public router:Router
     , private beauty:BeautyService,
     private route:ActivatedRoute
     ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);

    this.beauty.getBeautifyerList().subscribe((data)=>{
      data.map((el)=>{
        this.BeautyfyerList.push(el);
      });
      return this.BeautyfyerList;
    });
  }

  //assign
  assignApointment(assignrdvForm:any){
    if(this.assignrdvForm.valid){
      this.beauty.assignRendezvous(this.id,this.assignrdvForm.value.doneby,this.rdvstate).subscribe((res:any)=>{
        alert(res.message);
        this.router.navigate(["/beauty/rendezvous"]);
      });
      this.assignrdvForm.reset();
    }

    
  }
    

}
