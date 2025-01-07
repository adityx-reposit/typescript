// interface User{
//     id:string,
//     name:string,
//     age:number,
//     email:string,
//     password:string
// }only
// type User={
//      name:string,
//      age:number,
//      country:string
// }
// const obj: Readonly<User>={
//     name:"aditya",
//     age:21,
//     country:"india"
// }

   
// type UpdateProps= Pick<User,'name'| 'age'|'email'>
// type UpdatePropsOption = Partial<UpdateProps>
// function updateUser(updatedProps:UpdatePropsOption){
       
// }

const users=new Map<string,{name:string,age:number,country:string}>()
    users.set("admin1",{name:"aditya", age:32,country:"india"})
    users.set("admin2",{name:"aditya", age:21,country:"india"})

console.log(users.get("admin1"));



// const user:Users={
//     "ras@qd1":{
//         name:"aditya",
//         age:32,
//         country:"india"
//     },
//     "ras@qd2":{
//         name:"aditya",
//         age:21,
//         country:"india"
//     }
// }

