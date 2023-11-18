
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../../helper/axiosinstance'
import toast from 'react-hot-toast';

const initialState={
    courseData:[]
}


export const getAllCourses=createAsyncThunk("/course/get",async ()=>{

 try{
     const res=axiosInstance.get("/course");
     toast.promise(res,{
         loading:"loading course data...",
         success:"Courses loaded successfully",
         error:"Failed to get the Courses",
        })
        
        return (await res).data.courses;//courses is an array
    }
    catch(error){
toast.error(error?.response?.data?.message)
    }

})


const courseSlice=createSlice({

    name:"courses",
    initialState,
     reducers:{
    
     },
extraReducers:(builder)=>{


    builder.addCase(getAllCourses.fulfilled,(state,action)=>{

        if(action.payload){
            console.log("courses>",action.payload);
            state.courseData=[...action.payload];
        }

    })

}

})


export default courseSlice.reducer