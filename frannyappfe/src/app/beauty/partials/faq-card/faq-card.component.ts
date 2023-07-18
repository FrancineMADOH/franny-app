import { Component, OnInit, ViewChild } from '@angular/core';
import { BeautyService } from '../../services/beauty.service';
import { FaqsComponent } from '../../faqs/faqs.component';
import { Faq } from '../../models/faq';

@Component({
  selector: 'app-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.css']
})
export class FaqCardComponent implements OnInit {

  faqList:Faq[]=[];
  id!:string;

  @ViewChild("deleteFaqForm", {static: true}) deleteFaqForm:any;

  constructor(private beauty:BeautyService){}
  ngOnInit(): void {
    this.beauty.getFaqList().subscribe((res:Faq[])=>{
      res.map((data)=>{
        this.faqList.push(data);
        return this.faqList;
      });
    });
  }

  //deletequestion
  deleteFaq(deleteFaqForm:any){
    this.beauty.deleteFaq(deleteFaqForm).subscribe((res:any)=>{
      alert(res.message);
    })
  }


}
