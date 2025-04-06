"use strict";
// interface Client2{
//     name:string;
//     age:number;
//     address:Address
// }
// let client:Client={
//     name:"aditya",
//     age:21,
//     address:{
//         country:"india",
//         city:"kolkata",
//         pincode:71101,
//     }
// }
//class component here 
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`hello ${name} welcome to the age group of ${age}`);
    }
}
let assist = new Manager("aditya", 21);
