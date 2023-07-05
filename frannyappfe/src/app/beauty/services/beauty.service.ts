import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Beautifyer } from '../models/beautifyer';
import { environment } from 'src/app/environment/env';
import { Faq } from '../models/faq';
import { Prestation } from '../models/prestation';
import { Rendezvous } from '../models/rdv';
import { Review } from '../models/review';


@Injectable({
  providedIn: 'root'
})
export class BeautyService {

  constructor(private http:HttpClient) {
   }

  getBeautifyerList():Observable<Beautifyer[]>{
    return this.http.get<Beautifyer[]>(environment.baseUrl + "/beautifyers" );
  }
  updateBeautifyer(id:number):Observable<Beautifyer>{
    return this.http.put<Beautifyer>(environment.baseUrl + "/beautifyers/update" , id);
  }
  deletBeautifyer(id:number):Observable<Beautifyer>{
    return this.http.delete<Beautifyer>(environment.baseUrl + "beautifyers/delete" + id);
  }
  addBeautifyer(beauti:Beautifyer):Observable<Beautifyer>{
    return this.http.post<Beautifyer>(environment.baseUrl + "/beautifyers", beauti);
  }

  getFaqList():Observable<Faq[]>{
    return this.http.get<Faq[]>(environment.baseUrl + "/faqs" );

  }
  updateFaq(id:number):Observable<Faq>{
    return this.http.put<Faq>(environment.baseUrl + "/faqs/update",id)
  }
  getFaqbyCategory():Observable<Faq[]>{
    return this.http.get<Faq[]>(environment.baseUrl + "faq/category" );
  }
  addNewFaq(faq:Faq){
    this.http.post<Faq>(environment.baseUrl + "/faqs",faq)
  }

  addNewPrestation(pres:Prestation):Observable<Prestation>{
    return this.http.post<Prestation>(environment.baseUrl + "/prestation/add",pres);
  }
  updatePrestation(id:number):Observable<Prestation[]>{
    return this.http.put<Prestation[]>(environment.baseUrl + "/prestations/id",id)
  }
  getPrestationList():Observable<Prestation[]>{
    return this.http.get<Prestation[]>(environment.baseUrl + "/prestations" );
  }

  createRendezvous(rdv:Rendezvous):Observable<Rendezvous>{
    return this.http.post<Rendezvous>(environment.baseUrl + "/rdv/create",rdv)
  }
  updateRendezvous(id:number):Observable<Rendezvous>{
    return this.http.put<Rendezvous>(environment.baseUrl + "/rd/update",id)
  }
  getRendezvousList():Observable<Rendezvous[]>{
    return this.http.get<Rendezvous[]>(environment.baseUrl + "/rdv" );
  }
  getRendezvousByState(state:string):Observable<Rendezvous[]>{
    return this.http.get<Rendezvous[]>(environment.baseUrl + "");
    
  }
  getRendezvousByStateCount(state:string):Observable<number>{
    return this.http.get<number>(environment.baseUrl + "/rdv/state");
  }
  cancelrendezvous(id:number){
    return this.http.delete<Rendezvous>(environment.baseUrl + "/rdv/count"+id);

  }

  getReviewList():Observable<Review[]>{
    return this.http.get<Review[]>(environment.baseUrl + "/reviews" );
  }
  addReview(review:Review):Observable<Review>{
    return this.http.post<Review>(environment.baseUrl + "/reviews",review);
  }
//https://www.positronx.io/angular-httpclient-http-service/

  
}
