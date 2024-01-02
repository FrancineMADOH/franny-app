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
  //post!:Post;
  iscreateMode!:boolean;
  email = "";
  admin!:any;
  create_at =  new Date().toLocaleString();
  illustration!:any;


  @ViewChild("addArticle", {static:true}) addArticle:any;
  
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private blog:BlogService,
    private auth:AuthService
    ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.iscreateMode = !this.id;
    
    //get the connected admin
    this.admin = this.auth.getID()

    //get 
    if(!this.iscreateMode){
      this.blog.viewPost(Number(this.id)).subscribe((res)=>{
        this.addArticle.form.setValue({
          title: res.title,
          category: res.category,
          summary: res.summary, 
          content: res.content,
          illustration: "",
          imgcredit:res.imgcredit
        });
      })
    }

  }

  selectImage(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0]
      this.illustration = file;
      
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
      let post:FormData = new FormData()
      this.addArticle.value.create_at = this.create_at;
      this.addArticle.value.author = this.admin;
      this.addArticle.value.illustration = this.illustration

      post.append('illustration',this.illustration)
      post.append('title',this.addArticle.value.title) 
      post.append('category',this.addArticle.value.category)
      post.append('summary',this.addArticle.value.summary)
      post.append('content',this.addArticle.value.content)
      post.append('create_at', this.addArticle.value.create_at)
      post.append('author',this.addArticle.value.author)
      post.append('imgcredit', this.addArticle.value.imgcredit)

      this.blog.saveBlogPost(post).subscribe((res:any)=>{
        alert(res.message)
      });
      
    }

    this.addArticle.reset();
    this.router.navigate(['/posts'])
  }
  

  
  editPost(addArticle:any){
    if(this.addArticle.valid){
      let post:FormData = new FormData()

      // this.addArticle.value.create_at = this.create_at;
      // this.addArticle.value.author = this.admin.admin_id;
      // this.post = this.addArticle.value;

      this.addArticle.value.create_at = this.create_at;
      this.addArticle.value.author = this.admin;
      this.addArticle.value.illustration = this.illustration

      //post.append('illustration',this.illustration)
      post.append('title',this.addArticle.value.title) 
      post.append('category',this.addArticle.value.category)
      post.append('summary',this.addArticle.value.summary)
      post.append('content',this.addArticle.value.content)
      post.append('create_at', this.addArticle.value.create_at)
      post.append('author',this.addArticle.value.author)
      post.append('imgcredit', this.addArticle.value.imgcredit)
      console.log(post)
      this.blog.editPost(Number(this.id),post).subscribe((res:any)=>{
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
