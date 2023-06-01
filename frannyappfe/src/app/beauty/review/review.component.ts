import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @ViewChild("filterReview", {static: true}) filterReview:any
  ngOnInit(){}
  filterReviewBy(filterReview:any){
    this.filterReview.reset();
  }

}
