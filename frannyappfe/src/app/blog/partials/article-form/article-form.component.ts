import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  @ViewChild("addArticle", {static:true}) addArticle:any;
  ngOnInit(): void {
    
  }
  constructor(private router:Router){}
  create_at =  new Date().toLocaleString();
  savePosttoDatabase(addArticle:any){
    this.addArticle.reset();
  }
  backToPosts(){
    this.router.navigate(['/posts']);
  }
  viewPost(){
    this.router.navigate(['/posts/:slug'])
  }


}
