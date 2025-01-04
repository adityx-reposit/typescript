
// function sum(number1:number,number2:number){
// return number1+number2;
// }

// const ans:number=sum(1,2);
// console.log(ans);



// function isLegal(age:number){
//     if(age>=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isLegal(19));

// function delayed(fn:()=>void){
//     setTimeout(fn,1000)
// }
// function log(){
//     console.log("hello!!");
    
// }
// delayed(log)

// while going with the objects here is what you can do
// let greet =(user:{
//     name:string,
//     age:number
// })=>{
//     console.log("hello"+user.name);
    
// }
// let user={
//     name:"aditya",
//     age:21
// }
// greet(user);

//   interfaces declaration
// interface Address
// {
//         district: string,
//         country:string,
//         pincode:number
    
// }
// interface User {
//     name : string;
//     age:number;
//     address?: Address
//  }
 
//  let user={
//      name : "aditya",
//      age:21,
//      address:{
//         district: "howrah",
//         country:"india",
//         pincode:711101
//     }
     
//  }
//  let user2:User={
//     name:"aditya",
//     age:21,
//     address:{
//         district: "howrah",
//         country:"india",
//         pincode:711101
//     }
//  };
//  function greet(user:User):void{
    
//      console.log(`no access to ${user2.name}`);
     
//  }
//  greet(user);
interface People{
    name:string,
    age:number,
    greet:() => string
}


let people:People={
   name:"aditya",
   age:21,
   greet:()=>{
    return "hi "+ people.name
   }
}
// let greeting=people.greet();
// console.log(greeting);


// class Manager implements People{
//     name:string;
//     age:number;
//    constructor(name:string,age:number){
//        this.name= name;
//        this.age= age;
//    }
// }
// let user=new Manager("aditya",21);
// console.log(user.name+" "+ user.age);


