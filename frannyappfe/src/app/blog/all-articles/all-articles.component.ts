import { Component ,OnInit, ViewChild} from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {
@ViewChild("searchForm", {static:true}) searchForm:any;

constructor(private router:Router){}

  ngOnInit(): void {
    
}
goToNewArticlePage(){
  this.router.navigate(['posts/new'])
}
searchArticleByTerm(searchForm:Form){
  this.searchForm.reset();
}


}
