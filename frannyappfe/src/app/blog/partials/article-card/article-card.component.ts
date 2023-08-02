import { Component, OnInit } from '@angular/core';
import { Post, PostResult } from '../../models/post';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  post!:PostResult;
  postList:PostResult[] = [];
  filteredPostList:PostResult[] = [];

  constructor(private blog:BlogService, private route:ActivatedRoute,private router:Router){
    this.filteredPostList = this.postList;
  }

  ngOnInit(): void {
       this.blog.getblogpostList().subscribe((data)=>{
        data.map((post:any)=>{
          this.postList.push(post);
          console.log(this.postList)
          return this.postList;
        })});
    
  }

  viewblogPost(id:number,slug:string){ 
    this.router.navigate(['posts/view/' + id +'/' +  slug])
  }
  editblogPost(id:number){}
  deleteblogPost(id:number){}

}
