import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtResponse } from '../models/jwt-response';
import { Admin } from '../models/admin';
import { environment } from 'src/app/environment/env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

getMainRoute(){
    return this.http.get(environment.baseUrl);
}

createAdmin(admin: Admin):Observable<Admin>{
    return this.http.post<Admin>(environment.baseUrl + "/admins", admin)
    
}
signtheUserIn(email:string,admin_password:string){
  return this.http.post(environment.baseUrl + '/admins/signin', {email,admin_password})
}

resetPassword(email:string, password:string){
  return this.http.put(environment.baseUrl + '/admins/reset',{email,password})
}

deleteAdmin(id:number){
  return this.http.delete(environment.baseUrl + '/admins/delete')
}


 
}



