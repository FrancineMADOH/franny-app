import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";
import { Post, PostResult } from '../models/post';
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
  loading = true;
  AllPost:Post[] =[];
  feminityPosts:Post[] = [];
  maternityPosts:Post[] = [];
  familyPosts:Post[] = [];
  blog_post_id!:number;
  html!:any;
  like!:any;
  mysubscription:any;
  hasliked!:string;
  hascomment!:string;

  @ViewChild("commentForm",{static:true}) commentForm:any;
  @ViewChild("likebp", {static:true}) likebp:any;

  constructor(public blog:BlogService, 
    private auth:AuthService,
    private router:Router,
    private sanitized:DomSanitizer, 
    private route:ActivatedRoute){
      
    }

  ngOnInit(): void {

  setTimeout(() => {
      this.loading = false;
  }, 1000);
  this.isAdmin= this.auth.isLogin();
  this.commentsubmit = false;
  this.id = this.route.snapshot.params['id'];
  
    this.blog.viewPost(Number(this.id)).subscribe((data)=>{
      this.post = data;
      this.html = this.sanitized.bypassSecurityTrustHtml(data.content)
    });

    this.blog.getallComment(Number(this.id)).subscribe((res)=>{
      res.map((comment:any)=>{
        this.commentList.push(comment);
        return this.commentList;
      })
    });

    let usersession = JSON.parse(localStorage.getItem('status') || '');
    console.log(usersession)

    if(this.id == usersession.post){
      this.hasliked = usersession.status;
    }

   // this.hascomment = localStorage.getItem('comment') || ""

  }

onComment(commentForm:any){
    commentForm.value.blog_post_id = Number(this.id);
    commentForm.value.comment_date = new Date().toLocaleDateString();
    if(commentForm.valid){
     this.comment = commentForm.value;
     this.blog.addComment(this.comment).subscribe((res:any)=>{
      this.succesMessage = res.message;
     })
     window.location.reload();
    }
    this.comment_class = this.succesMessage.split(" ")[0]
    commentForm.reset();
    this.commentsubmit = !this.commentsubmit;
    //localStorage.setItem('comment',"commented")
    
  }

  deleteComment(id:number){
    this.blog.deleteComment(id).subscribe((res)=>{
      alert(res.message);
      window.location.reload();
    });
  }

  gotoPost(id:number, slug:string){
    this.router.navigate(['posts/view/' + id +'/' +  slug])
  }

  editblogPost(id:number){
    this.router.navigate(['posts/edit/' + id]);
  }
  backtoPost(){
    this.router.navigate(['posts/']);
  }

  onSubmit(likebp:any){
    this.blog.likeblogPost(Number(this.id)).subscribe((res)=>{
      console.log(res);
      this.like = document.getElementById("like");
      this.like.classList.toggle("liked");
      this.like.classList.add("disabled");
      this.post.applause +=1;
      let session={
        'status':"liked",
        'post':this.id
      }
      localStorage.setItem('status',JSON.stringify(session))
    })
  }

}
