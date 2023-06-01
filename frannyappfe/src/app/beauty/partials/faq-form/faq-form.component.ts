import { Component, OnInit , ViewChild} from '@angular/core';

@Component({
  selector: 'app-faq-form',
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.css']
})
export class FaqFormComponent implements OnInit {

  @ViewChild("addFaqForm", { static: true }) addFaqForm:any

  ngOnInit(): void {
    
  }
  saveNewFaq(addFaqForm:any){
    this.addFaqForm.reset();
  }

}
