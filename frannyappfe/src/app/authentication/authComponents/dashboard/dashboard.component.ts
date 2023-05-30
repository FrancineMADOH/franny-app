import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Emmiter } from '../../services/authEmmiter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email = null;

  constructor(private auth: AuthService ){}

  ngOnInit(): void {
   
  }

}
