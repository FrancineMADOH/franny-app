import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject,Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any = {};
  email!:string
  fcbk!:SafeHtml
  twitter!:SafeHtml
  linked!:SafeHtml

  constructor(private auth: AuthService, 
    public sanitized:DomSanitizer,

    private route:ActivatedRoute ){
  }
  ngOnInit(): void {
  this.email = this.route.snapshot.params['email'];
   this.auth.getAdminInfos(this.email).subscribe((res:any)=>{
    this.user = res;
    this.fcbk = this.sanitized.bypassSecurityTrustHtml(res.facebook_url);
    this.linked = this.sanitized.bypassSecurityTrustHtml(res.linkedin_url);
    this.twitter = this.sanitized.bypassSecurityTrustHtml(res.twitter_url);

    });
  }

  logOut():void{
    this.auth.logout();
  }

}
