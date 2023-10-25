import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/review';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {
  rev!: Review;
  ngOnInit(): void {
    
  }

  

}
