import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject,Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any = {};

  constructor(private auth: AuthService, private activateRoute:ActivatedRoute ){
    this.user = this.auth.currentUser;
  }
  ngOnInit(): void {
   
  }

  logOut():void{
    this.auth.logout();
  }

}
