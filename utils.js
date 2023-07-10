// var bname = "Francine Idene Madoh Kengne";
// var recruit_date = "2023-07-06";
// var ville = "Yaounde";//Douala

// var splittedName = bname.split(" ");
// let initials = "";

// function namedCode(){
//     init = splittedName.map((el)=>el.charAt(0)).join("");
//     initials = init.slice(0,2);
//     return initials;
// }
// namedCode();

// ;
// let all_initials ="";

function generateBeautifCode(date,bname,ville,quarter){

    //annee
    var splited_date = date.split("-")
    let year = splited_date[0].slice(2,4);
    dateCode = year + splited_date[1] + splited_date[2] ;
    //name
    var splittedName = bname.split(" ");
    init = splittedName.map((el)=>el.charAt(0)).join("");
    initials = init.slice(0,2);
    
    //ville
    let initial_ville = ville[0]+ ville.slice(-2);
    let initial_quartier = quarter.slice(-3) + quarter[0]+quarter[1];

all_initials = (dateCode+initials + initial_ville+initial_quartier).toLocaleUpperCase();
console.log(all_initials.toLocaleUpperCase())
return all_initials.toLocaleUpperCase() ;

}
recuitDateCode("2023-07-06","Francine Idene Madoh Kengne","Yaounde","Mvog-Betsi");
//console.log(all_initials)


