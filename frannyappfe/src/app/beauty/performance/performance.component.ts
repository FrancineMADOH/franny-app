import { Component, OnInit } from '@angular/core';
import { BeautyService } from '../services/beauty.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  metrics!:any;

  constructor(private beauty:BeautyService){}

  ngOnInit(): void {
    this.beauty.getMetrics().subscribe((res)=>{
      this.metrics = res;
      console.log(this.metrics)
      return this.metrics
    })
    
  }

}
