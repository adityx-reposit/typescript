interface People{
    name:string
    age:number,
    greet: ()=> string,
    greet2:()=>string
}

const prople:People={
   name:"aditya",
   age:21,
    greet:()=>{
        return "hi"
    },
    greet2:()=>{
        return "hello"
    }
}

console.log(prople.greet())
console.log(prople.greet2())