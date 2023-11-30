import { Component, OnInit } from '@angular/core';
import { BeautyService } from '../services/beauty.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  isresolve = false;
  notifications:any[] = [];
  constructor(private beauty:BeautyService){}

  ngOnInit(): void {
    this.beauty.getnewNotif().subscribe((res)=>{
      res.map((el:any) => this.notifications.push(el))
      return this.notifications;
    })}

  resolveNotif(form:any){}

}
