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
  currentUser:any = {};
  cemail = "";

  constructor(private auth: AuthService, private activateRoute:ActivatedRoute ){

    let  email:string|null = this.activateRoute.snapshot.paramMap.get("email");
    this.auth.getAdminInfos(email||"").subscribe(res=>{
      this.currentUser = res ;
      console.log(res)
      this.auth.updatedEmail(this.currentUser.email);

    });
  }
  ngOnInit(): void {
   
  }

  logOut():void{
    this.auth.logout();
  }

}
