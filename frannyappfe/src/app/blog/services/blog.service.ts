import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Post } from '../models/post';
import { environment } from 'src/app/environment/env';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }


  //get blog post list

  getblogpostList():Observable<Post[]>{
    return this.http.get<Post[]>(environment.baseUrl +"/posts").pipe(catchError(this.handleErrors));
  }

  editPost(id:number,post:Post):Observable<Post>{
    return this.http.put<Post[]>(environment.baseUrl +`/posts/${id}`, {id,post}).pipe(catchError(this.handleErrors));
  }
  
  viewPost(id:number):Observable<Post>{
    return this.http.get<Post>(environment.baseUrl +`/posts/${id}`).pipe(catchError(this.handleErrors));
  }

  saveBlogPost(post:Post):Observable<Post>{
    return this.http.post<any>(environment.baseUrl+"/posts", {post}).pipe(catchError(this.handleErrors));
  }



  //handle errors
  handleErrors(error:HttpErrorResponse ):Observable <any>{
    let errorMessage:any ="";

    if(error.error.code instanceof Error){
      errorMessage = error.message;
      console.log(errorMessage);
      return errorMessage;
    }else{
      //server side error
      errorMessage = `Error Code:${error.status} Message:${error.message}`;
      return errorMessage;
    }
   // return errorMessage;
  }
  
}
