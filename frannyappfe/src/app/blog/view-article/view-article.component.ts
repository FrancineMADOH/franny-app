import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostResult } from '../models/post';
import { BlogService } from '../services/blog.service';
import { Comment } from '../models/comment';
import { AuthService } from 'src/app/authentication/services/auth.service';


@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  id!:string;
  post!: any;
  comment!:any;
  commentsubmit!:boolean;
  succesMessage = "";
  comment_class="";
  number_of_comments!:number;
  commentList:Comment[]= [];
  isAdmin!:boolean;

  @ViewChild("commentForm",{static:true}) commentForm:any

  constructor(public blog:BlogService, 
    private auth:AuthService,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.commentsubmit = false;
  if(!this.auth.bEmail.value){
    this.isAdmin = false;
  }
    this.id = this.route.snapshot.params['id'];
  
    this.blog.viewPost(Number(this.id)).subscribe((data)=>{
      this.post = data;
    });

    this.blog.getallComment(Number(this.id)).subscribe((res)=>{
      res.map((comment:any)=>{
        this.commentList.push(comment);
        return this.commentList;
      })
    }) 
  }

  onComment(commentForm:any){
    this.commentForm.value.blog_post_id = Number(this.id);
    this.commentForm.value.comment_date = new Date().toLocaleDateString();
    if(this.commentForm.valid){
     this.comment = this.commentForm.value;
     this.blog.addComment(this.comment).subscribe((res:any)=>{
      this.succesMessage = res.message;
      this.comment_class = this.succesMessage.split(" ")[0]
     })
    }
    this.commentForm.reset();
    this.commentsubmit = !this.commentsubmit;
    
  }

  deleteComment(id:number){
    this.blog.deleteComment(id).subscribe((res)=>{
      alert(res.message);
      window.location.reload();
    });
  }
 

}
