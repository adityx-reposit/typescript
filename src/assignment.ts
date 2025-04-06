interface Address{
   country:string;
   city:string;
   pincode:number;
}
interface Client{
   name:string;
   age:number;
   address?: Address
}

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

// class Manager implements Client{
  
    
//     constructor(public name:string , public age:number){
//         this.name=name;
//         this.age=age;
        
//         console.log(`hello ${name} welcome to the age group of ${age}`);
            
//     }
// }
// class God extends Manager{
//     constructor(name:string, age:number){
//        super(name,age)
       
       
//    }
// }
   
// let assist=new Manager("aditya",21)


//array starts here 


function getmax(num:number[]){
    let maxValue=0;
        for(let i=0;i<num.length;i++){
          if(num[i]>maxValue){
            maxValue=num[i]
          }
        }
        return console.log(maxValue);
         

    }
    getmax([1,2,34,6,7])



    interface User{
        name:string[];
        age:number[];
      
    }


    let voted:User{
       
    }
        
    



   