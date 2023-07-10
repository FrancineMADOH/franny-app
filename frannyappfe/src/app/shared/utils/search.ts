// function checkSearchTerm(searchterm :string,searchList:[],searchParam:string){

//     let filteredList:[] = [];
//     if(searchterm && searchterm !=""){
//         for(let i=0; i< searchList.length; i++ ){
//             if(searchList[i].){}
//         }
//     }




// }



import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"search"
})

export class FilterPipe implements PipeTransform {
transform(query:any, searchList:any){
    if(!query){
        return query;
    }
    return query.filter((data:any)=>this.matchValue(data, searchList))
}

matchValue(data:any,value:any){
    return Object.keys(data).map((key)=>{
        return new RegExp(value, 'gi').test(data[key]);
    }).some(result=>result)
}

}