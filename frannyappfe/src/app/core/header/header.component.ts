import { Component, OnInit } from '@angular/core';
import { Router, RouterLink,ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone:true,
  imports: [NgbCollapseModule, RouterLink,CommonModule,BrowserModule]
})
export class HeaderComponent implements OnInit {
  navbarCollapse:boolean = true;
  currentUser:any = ""

  constructor(public auth:AuthService, private activateRoute:ActivatedRoute){
    this.auth.email.subscribe((val)=>{
      this.currentUser = val;
      console.log(this.currentUser);
    }) ;

  }

  ngOnInit() {
  }
  
}
