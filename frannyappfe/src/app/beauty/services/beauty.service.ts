import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Beautifyer } from '../models/beautifyer';
import { environment } from 'src/app/environment/env';
import { Faq } from '../models/faq';
import { Prestation } from '../models/prestation';
import { Rendezvous } from '../models/rdv';
import { Review } from '../models/review';
import { catchError,map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BeautyService {

  constructor(private http:HttpClient) {
   }

  getBeautifyerList():Observable<Beautifyer[]>{
    return this.http.get<Beautifyer[]>(environment.baseUrl + "/beautifyers" ).pipe(catchError(this.handleError));
  }
  updateBeautifyer(id:number,beauty:Beautifyer):Observable<any>{
    return this.http.put<Beautifyer>(environment.baseUrl + `/beautifyers/update/${id}` , {id,beauty}).pipe(catchError(this.handleError));
  }
  deleteBeautifyer(id:number):Observable<Beautifyer>{
    return this.http.delete<Beautifyer>(environment.baseUrl + "beautifyers/delete" + id).pipe(catchError(this.handleError));
  }
  addBeautifyer(beauti:Beautifyer):Observable<any>{
    return this.http.post<Beautifyer>(environment.baseUrl + "/beautifyers", beauti).pipe(catchError(this.handleError));
  }
  getBeautifyers(id:number): Observable<Beautifyer>{
    return this.http.get<Beautifyer>(environment.baseUrl + `/beautifyers/${id}`).pipe(catchError(this.handleError));
  }

  getFaqList():Observable<Faq[]>{
    return this.http.get<Faq[]>(environment.baseUrl + "/faqs" ).pipe(catchError(this.handleError));
  }
  deleteFaq(id:number):Observable<Faq>{
    return this.http.delete<Faq>(environment.baseUrl + `/faqs/${id}`).pipe(catchError(this.handleError));
  }
  getFaqbyCategory():Observable<Faq[]>{
    return this.http.get<Faq[]>(environment.baseUrl + "faq/category" ).pipe(catchError(this.handleError));
  }

  addNewFaq(faq:Faq):Observable<Faq>{
    return this.http.post<Faq>(environment.baseUrl + "/faqs",faq).pipe(catchError(this.handleError));
  }

  addNewPrestation(pres:Prestation):Observable<Prestation>{
    return this.http.post<Prestation>(environment.baseUrl + "/prestations/",pres).pipe(catchError(this.handleError));
  }
  updatePrestation(id:number,prestation:Prestation):Observable<Prestation[]>{
    return this.http.put<Prestation[]>(environment.baseUrl + `/prestations/${id}`,{prestation}).pipe(catchError(this.handleError));
  }
  getPrestationList():Observable<Prestation[]>{
    return this.http.get<Prestation[]>(environment.baseUrl + "/prestations" ).pipe(catchError(this.handleError));
  }

  getPrestation(id:number):Observable<any>{
    return this.http.get(environment.baseUrl + `/prestations/${id}`).pipe(catchError(this.handleError));
  }
  createRendezvous(rdv:Rendezvous):Observable<Rendezvous>{
    return this.http.post<Rendezvous>(environment.baseUrl + "/rdv/create",rdv).pipe(catchError(this.handleError));
  }
  updateRendezvous(id:number):Observable<Rendezvous>{
    return this.http.put<Rendezvous>(environment.baseUrl + "/rd/update",id).pipe(catchError(this.handleError));
  }
  getRendezvousList():Observable<Rendezvous[]>{
    return this.http.get<Rendezvous[]>(environment.baseUrl + "/rdv" ).pipe(catchError(this.handleError));
  }
  getRendezvousByState(state:string):Observable<Rendezvous[]>{
    return this.http.get<Rendezvous[]>(environment.baseUrl + "").pipe(catchError(this.handleError));
    
  }
  getRendezvousByStateCount(state:string):Observable<number>{
    return this.http.get<number>(environment.baseUrl + "/rdv/state").pipe(catchError(this.handleError));
  }
  cancelrendezvous(id:number){
    return this.http.delete<Rendezvous>(environment.baseUrl + "/rdv/count"+id).pipe(catchError(this.handleError));

  }

  getReviewList():Observable<Review[]>{
    return this.http.get<Review[]>(environment.baseUrl + "/reviews" ).pipe(catchError(this.handleError));
  }
  addReview(review:Review):Observable<Review>{
    return this.http.post<Review>(environment.baseUrl + "/reviews",review).pipe(catchError(this.handleError));
  }
//https://www.positronx.io/angular-httpclient-http-service/

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
