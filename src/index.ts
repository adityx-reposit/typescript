
interface User{
    name:string,
    age:number,
    address?:{
        city:string,
        state:string,
        country:string,
        
    }
}


let user:User ={
    name:"aditya",
    age:21,
    address:{
        city:"howrah",
        state:"wb",
        country:"india"
    }
}
let user2:User={
    name:"aditya",
    age:10,

}

function isLegal(user2:User):boolean{
    return (user2.age>=18? true:false)
       

}


const response =isLegal(user2)

if(response){
    console.log("you are legal");
    
}
else{
    console.log("you are illegal");
    
}