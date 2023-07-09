import { Component, Input,OnInit } from '@angular/core';
import { Beautifyer } from '../../models/beautifyer';
import { BeautyService } from '../../services/beauty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beautifyer-card',
  templateUrl: './beautifyer-card.component.html',
  styleUrls: ['./beautifyer-card.component.css']
})
export class BeautifyerCardComponent implements OnInit {
  beautifList:Beautifyer[]= [];
  filteredList:Beautifyer[]=[];
  searchVal:string= "";
constructor(private beau: BeautyService, public router: Router){
  this.filteredList = this.beautifList
}

ngOnInit():void{
  this.beau.getBeautifyerList().subscribe((res:Beautifyer[])=>{
    res.map((el)=>{
      this.beautifList.push(el);
      return this.beautifList;  
    })

  }); 
}

gotoUpdate(el:number){
  this.router.navigate(["beauty/beautifyers/update/" + el]);
}
searchBeautifyerTerm(query:string){
  const searchterm = query.search.toString();
  console.log(query.search)
  console.log(typeof(query.search))

  if(!query){
    this.filteredList = this.beautifList;
  }
this.filteredList = this.beautifList.filter(
  Beautifyer => Beautifyer?.bname.toLowerCase().includes(searchterm.toLocaleLowerCase()))
console.log(this.filteredList)

  // console.log(event.target.value);
  // let filteredList = [];
  // for(var i=0; i<this.beautifList.length; i++ ){
  //   if(this.beautifList[i].bname.toLowerCase()
  //   .search(this.searchVal.toLowerCase()) != -1 || 
  //   this.beautifList[i].ville.toLowerCase().search(this.searchVal.toLowerCase()) != -1 ){
  //     filteredList.push(this.beautifList[i])
  //   }
  // }
  // console.log(filteredList)
  // this.beautifList = filteredList.slice();
  // // console.log(this.beautifList)

}

}
