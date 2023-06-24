import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser:Object = {} || "{}";

  constructor(private auth: AuthService, private activateRoute:ActivatedRoute ){

    let  email:string|null = this.activateRoute.snapshot.paramMap.get("email");
    this.auth.getAdminInfos(email||"").subscribe(res=>{
      console.log(email);
      this.currentUser = res;
    } )
  }

  ngOnInit(): void {
   
  }

}
