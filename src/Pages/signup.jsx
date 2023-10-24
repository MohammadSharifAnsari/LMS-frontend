import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createAccount } from "../REDUX/Slices/authslice";

function Signup(){

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [previewImage,setPreviewImage]=useState("");
    const [signUpData,setSignUpData]=useState({
fullName:"",
email:"",
password:"",
avatar:""
});
// console.log("signUpData>",signUpData);
// console.log("previewImage>",previewImage);

function handleUserInput(e){
  
    const {name,value}=e.target;
setSignUpData({
    ...signUpData,
[name]:value
})


}

function getImage(event){

event.preventDefault();

const uploadedImage=event.target.files[0];
console.log("image",uploadedImage);
if(uploadedImage){

    setSignUpData({
        ...signUpData,
        avatar:uploadedImage
    })

}

const fileReader=new FileReader();
//file reader is a class use to read a file filereader is an object to read a file
fileReader.readAsDataURL(uploadedImage);
//fileReader.readAsDataURL(uploadedImage) read the file as uploadedImage as an dataUrl and then store the reading data into fileReader.result
//jaise hi file reader load hoga means file read kar chuka hoga then callback function call ho jaega
fileReader.addEventListener("load",function(){
    console.log("result>",this.result);
setPreviewImage(this.result);
})


}

async function CreateAccount(event){
//form submission by default page kp refresh karne katry karta hai woh nhi karna hai
    event.preventDefault();
if(!signUpData.email||!signUpData.avatar|| !signUpData.password || !signUpData.fullName){
    toast.error("please fill all the feilds");
    return ;
}
if(signUpData.fullName.length<5){
    toast.error("Name should be atleast 5 character");
}
//cheking valid email
if(!signUpData.email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){

toast.error("Inavlid Email");
}
if(!signUpData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)){
toast.error(" password at least 8 characters ans must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number or Can contain special characters ");
}

let formdata=new FormData();
formdata.append("name",signUpData.fullName);
formdata.append("email",signUpData.email);
formdata.append("password",signUpData.password);
formdata.append("avatar",signUpData.avatar);

//dispatch create account action

const response=await dispatch(createAccount(formdata));
console.log("response>",response);
if(response?.payload?.success){

    navigate("/");

}



setSignUpData(

    {
        fullName:"",
        email:"",
        password:"",
        avatar:""
        }
    )


}
    


return(
    <HomeLayout>
<div className=" flex items-center justify-center h-[100vh] ">

<form noValidate onSubmit={ CreateAccount } className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">

<h1 className=" text-center text-2xl font-bold">Registration Page</h1>
<label htmlFor="image_upload" className=" cursor-pointer">

{
previewImage?<img src={previewImage} alt="image not load" className=" w-24 h-24 rounded-full m-auto" />:<BsPersonCircle className=" w-24 h-24 rounded-full m-auto"/>

}

</label>

<input type="file" name="image_uploads" className=" hidden " id="image_upload" accept=".jpg,.jpeg,.png,.svg" onChange={getImage} />

<div className=" flex flex-col gap-1">

<label htmlFor="fullName" className=" font-semibold">Name</label>
<input 
type="text" 

name="fullName"
id="fullName"
required
placeholder="enter your name.."
className=" bg-transparent px-2 py-1 border"
onChange={handleUserInput}
value={ signUpData.fullName }
/>

</div>

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
value={ signUpData.email }
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
value={ signUpData.password }
/>

</div>

<button type="submit" className=" mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
    Create Account
</button>

<p className=" text-center">
Already have an account ? <Link to="/login" className=" link text-accent cursor-pointer " >login</Link>
</p>

</form>

</div>
    </HomeLayout>
)


}


export default Signup;
