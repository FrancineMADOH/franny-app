import { Component,OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  @ViewChild("addReviewForm", {static:true}) addReviewForm:any;
  ngOnInit(): void {
    
  }

  saveUserReview(addReviewForm:any){
    this.addReviewForm.reset()
  }

}
