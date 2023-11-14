import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import axiosInstance from '../../helper/axiosinstance';

const initialState={
    // isLoggedIn check ki user login hai ya nhi
    isLoggedIn:localStorage.getItem('isLoggedIn')||false,
    // isLoggedIn:false,
    // role show about the role of user
    role:localStorage.getItem('role')||"",
    // data me extra data regarding user store karaenge 
    data:localStorage.getItem('data')||{}

}
export const createAccount=createAsyncThunk("/auth/signup",async(data)=>{
//create account itself an object
    try{
const res=axiosInstance.post('/user/register',data);
// const res=await axiosInstance.post('user/register',data);
//when toast give according to state of promise
//res is promise
toast.promise(res,{
    loading:"wait! your account creating",
    success:(data)=>{
        return data?.data?.message;
    },
    error:"Failed to craet account"
});

return (await res).data;


    }catch(error){
        console.log(error);
        toast.error(error?.response?.data?.message);

    }


})

//login is a functuion which actually return a promise 
export const login=createAsyncThunk("/auth/login",async(data)=>{
    try{
        const res=axiosInstance.post("/user/login",data);//yahan await lagate to toast aane me bhi time lagta
        toast.promise(res,{
            loading:"wait! authentication in progress..",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to login "
        });
        return (await res).data

    }
    catch(error){

        console.log(error);
        toast.error(error?.response?.data?.message);
        
    }


})



const authSlice=createSlice({
name:'auth',
initialState,
reducers:{},
//state means initial state
extraReducers:(login.fulfilled,(state,action)=>{//login fullfilled hone ke baad backend se responce jo aaega yeh woh hai
localStorage.setItem("data",JSON.stringify(action?.payload?.user));
localStorage.setItem("isLoggedIn",true);
localStorage.setItem("role",action?.payload?.user?.role);
state.isLoggedIn=true;
state.data=action?.payload?.user;
state.role=action?.payload?.user?.role;


})


});

// export {}=authSlice.actions;
export default authSlice.reducer;

