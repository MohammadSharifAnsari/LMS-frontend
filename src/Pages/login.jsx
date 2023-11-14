import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { login } from "../REDUX/Slices/authslice";

function Login(){

    const dispatch=useDispatch();
    const navigate=useNavigate();


    const [loginData,setloginData]=useState({

email:"",
password:"",

});
// console.log("signUpData>",signUpData);
// console.log("previewImage>",previewImage);

function handleUserInput(e){
  
    const {name,value}=e.target;//e.target give us the html element
setloginData({
    ...loginData,
[name]:value
})


}


async function OnLogin(event){
//form submission by default page kp refresh karne katry karta hai woh nhi karna hai
    event.preventDefault();
if(!loginData.email || !loginData.password ){
    toast.error("please fill all the feilds");
    return ;
}

//cheking valid email




//dispatch create account action
//login function return a promise and sipatch work accordibg to promise
const response=await dispatch(login(loginData));
//responce backend se aaega
console.log("response>",response);
if(response?.payload?.success){

    navigate("/");

}




setloginData(

    {
       
        email:"",
        password:"",
     
        }
    )


}
    


return(
    <HomeLayout>
<div className=" flex items-center justify-center h-[100vh] ">

<form noValidate onSubmit={ OnLogin } className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">

<h1 className=" text-center text-2xl font-bold">Login Page</h1>




<div className=" flex flex-col gap-1">

<label htmlFor="email" className=" font-semibold">Email</label>
<input 
type="email" 
required
name="email"
id="email"
placeholder="enter your email.."
className=" bg-transparent px-2 py-1 border"
onChange={handleUserInput}
value={ loginData.email }
/>

</div>

<div className=" flex flex-col gap-1">

<label htmlFor="password" className=" font-semibold">Password</label>
<input 
type="password" 
required
name="password"
id="password"
placeholder="enter your password.."
className=" bg-transparent px-2 py-1 border"
onChange={handleUserInput}
value={ loginData.password }
/>

</div>

<button type="submit" className=" mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
   Login
</button>

<p className=" text-center">
Don't have an account ? <Link to="/signup" className=" link text-accent cursor-pointer " >Signup</Link>
</p>


</form>

</div>
    </HomeLayout>
)


}


export default Login;
