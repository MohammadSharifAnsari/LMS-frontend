import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import axiosInstance from '../../helper/axiosinstance';

const initialState={
    // isLoggedIn check ki user login hai ya nhi
    isLoggedIn:localStorage.getItem('isLoggedIn')||false,
    // role show about the role of user
    role:localStorage.getItem('role')||"",
    // data me extra data regarding user store karaenge 
    data:localStorage.getItem('data')||{}

}
export const createAccount=createAsyncThunk("/auth/signup",async(data)=>{
//create account itself an object
    try{
const res=axiosInstance.post('api/v1/user/register',data);
// const res=await axiosInstance.post('user/register',data);
//when toast give according to state of promise
//res is promise
toast.promise(res,{
    loading:"wait! your account creating",
    success:(data)=>{
        return data?.data?.message;
    },
    error:"Failed to craete account"
});

return (await res).data


    }catch(error){

        toast.error(error?.response?.data?.message);

    }


})




const authSlice=createSlice({
name:'auth',
initialState,
reducers:{},

});

// export {}=authSlice.actions;
export default authSlice.reducer;

