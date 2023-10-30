import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/post';
import { BlogService } from '../../services/blog.service';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  categories = ["Maternity","Feminity","Family"];
  id!:string;
  post!:Post;
  iscreateMode!:boolean;
  email = "";
  admin!:any;
  create_at =  new Date().toLocaleString();


  @ViewChild("addArticle", {static:true}) addArticle:any;
  
  constructor(private router:Router,
    private route:ActivatedRoute,
    private blog:BlogService,
    private auth:AuthService
    ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.iscreateMode = !this.id;
    this.email = this.auth.getEmail()
    //get the connected admin
    this.auth.getAdminInfos(this.email).subscribe((res)=>{
      this.admin = res;
      return this.admin;
    });
    //get 
    if(!this.iscreateMode){
      this.blog.viewPost(Number(this.id)).subscribe((res)=>{
        this.addArticle.form.setValue({
          title: res.title,
          category: res.category,
          summary: res.summary, 
          content: res.content,
          illustration: res.illustration
        })
      })
    }

  }

  onSubmit(){
    if(this.iscreateMode){
      this.savePosttoDatabase(this.addArticle)
    }else{
      this.editPost(this.addArticle)
    }
  }
  savePosttoDatabase(addArticle:any){
    if(this.addArticle.valid){
      this.addArticle.value.create_at = this.create_at;
      this.addArticle.value.author = this.admin.admin_id;
      this.post =  this.addArticle.value;
      console.log(this.post)
      this.blog.saveBlogPost(this.post).subscribe((res:any)=>{
        alert(res.message)
      })
    }
    this.addArticle.reset();
    this.router.navigate(['/posts'])
  }

  
  editPost(addArticle:any){
    if(this.addArticle.valid){
      this.addArticle.value.create_at = this.create_at;
      this.addArticle.value.author = this.admin.admin_id;
      this.post = this.addArticle.value;
      this.blog.editPost(Number(this.id),this.post).subscribe((res:any)=>{
        alert(res.message)
      });
    }
    this.addArticle.reset();
    this.router.navigate(['/posts'])
    
  }

  backToPosts(){
    this.router.navigate(['/posts']);
  }
  viewPost(){
    this.router.navigate(['/posts/'])
  }


}
