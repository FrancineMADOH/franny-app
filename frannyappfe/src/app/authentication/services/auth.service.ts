import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtResponse } from '../models/jwt-response';
import { Admin } from '../models/admin';
import { environment } from 'src/app/environment/env';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
selectedAdmin: Admin = {
  admin_name:"" ,
  username:"" ,                               
  twitter_url:"",                    
  linkedin_url:"",  
  facebook_url:"",               
  email:"",                 
  admin_password:"",               
  //avatar:"", //{data:Buffer,contentType:string }  
  activ_date:"",              
  superuser:false
      
}



constructor(private http: HttpClient) { }

getMainRoute(){
    return this.http.get(environment.baseUrl);
  }

createAdmin(admin: Admin){
    return this.http.post(environment.baseUrl + "/admins", admin )
    
}
signtheUserIn(email:string,admin_password:string){
  return this.http.post(environment.baseUrl + '/admins/signin', {email,admin_password})
}

resetPassword(email:string, password:string){
  return this.http.put(environment.baseUrl + '/admins/reset',{email,password})
}

deleteAccount(id:number){
  return this.http.delete(environment.baseUrl + '/admins/delete')
}


 
}

// adminRouter.post("",upload.single("avatar") ,methods.create);
// adminRouter.get("",verifyToken,methods.index);
// adminRouter.post("/signin", methods.show);
// adminRouter.put("/reset",verifyToken,methods.update);
// adminRouter.delete("/delete",verifyToken, methods.delete);




