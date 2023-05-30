import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beautifyer-form',
  templateUrl: './beautifyer-form.component.html',
  styleUrls: ['./beautifyer-form.component.css']
})
export class BeautifyerFormComponent implements OnInit {

  @ViewChild("addBeautifForm", {static: true}) addBeautifForm: any;

  constructor(private router:Router) {
    }

  ngOnInit(): void {
    
  }
  backtoBeautifList(){
    this.router.navigate(['beauty/beautifyers']);
  }
  saveBeautif(addBeautifForm:any){
    this.addBeautifForm.reset()
  }

}
