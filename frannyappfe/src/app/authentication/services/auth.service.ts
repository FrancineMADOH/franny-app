import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtResponse } from '../models/jwt-response';
import { Admin } from '../models/admin';
import { environment } from 'src/app/environment/env';
import { FormGroup } from '@angular/forms';

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
signtheUserIn(){
  return this.http.get(environment.baseUrl + '/admins')
}
  // getAdminById(){
  //   return this.http.get('http://localhost:4000/api/admins/:id')

  // }
  // siginAsAdmin(){
  //   return this.http.get('http://localhost:4000/api/admins/:id')
  // }
  // resetAdminPassword(){
  //   return this.http.put('http://localhost:4000/api/admins/reset')
  // }
  // removeAdmin(){
  //   return this.http.delete('http://localhost:4000/api/admins/delete')
  // }
}




