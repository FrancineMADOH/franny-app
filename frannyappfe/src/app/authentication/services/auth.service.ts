import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
import { JwtResponse } from '../models/jwt-response';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import { environment } from 'src/app/environment/env';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders().set("Content-Type", "application/json");
  currentUser = {};

constructor(private http: HttpClient, public router:Router) { }

createAdmin(admin: Admin):Observable<Admin>{
    return this.http.post<Admin>(environment.baseUrl + "/admins", admin)
    .pipe(catchError(this.handleError));
    
}
signtheUserIn(email:string,admin_password:string){
  return this.http.post(environment.baseUrl + '/admins/signin', {email,admin_password}).subscribe((res:any)=>{
    localStorage.setItem("acces_token", res);
    this.getAdminInfos((res._email).subscribe((res:any)=>{
      this.currentUser = res;
      console.log(res)
      this.router.navigate(['dashboard']);
    }));
  })
}

resetPassword(email:string, password:string){
  return this.http.put(environment.baseUrl + '/admins/reset',{email,password})
}

deleteAdmin(id:number){
  return this.http.delete(environment.baseUrl + '/admins/delete')
}

//get the connected agent information
getAdminInfos(email:string){
  return this.http.get(environment.baseUrl + '/admin/profile/$email', {headers:this.headers}).pipe(
   map((res:any)=>{
    return res || {}
   }),
   catchError(this.handleError));
}

getAccesToken(){
  return localStorage.getItem('acces_token');
};
get isLogin():boolean {
  let authToken = localStorage.getItem('acces_token');
  console.log(authToken);
  return (authToken!==null)? true:false;
}

logout(){
  if(localStorage.removeItem('acces_token') == null){
    this.router.navigate(['/login']);
  }
}

//handle anny error that occurs
handleError(error:HttpErrorResponse):Observable<any>{
  let errorMessage:any = "";

  if(error.error instanceof ErrorEvent){
    //Client Side error message
    errorMessage = error.message;
    console.log(errorMessage);
  }else {
    //server side error
    errorMessage =  `Error Code: {error.status}\nMessage:${error.message}`
  }
  return errorMessage;
} 
}



