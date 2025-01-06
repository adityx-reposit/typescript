interface User{
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}
type UpdateProps= Pick<User,'name'| 'age'|'email'>
type UpdatePropsOption = Partial<UpdateProps>
function updateUser(updatedProps:UpdateProps){
       
}
