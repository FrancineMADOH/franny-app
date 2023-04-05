import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone:true,
  imports: [NgbCollapseModule, RouterLink]
})
export class HeaderComponent implements OnInit {
  navbarCollapse:boolean = true;
  
  ngOnInit() {

  }

}
