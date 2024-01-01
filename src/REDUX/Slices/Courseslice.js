
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
export const createNewCourse=createAsyncThunk("/course/create",async (data)=>{
    try{

        let formData=new FormData();//multipart form hai n isliye for data bnanan padega
formData.append("title",data?.title);
formData.append("description",data?.description);
formData.append("category",data?.category);
formData.append("thumbnail",data?.thumbnail);
 formData.append("createdBy", data?.createdBy);


        const response=axiosInstance.post("/course",formData);
     
        toast.promise(response,{
            loading:"Creating new course...",
            success:"Course created successfully",
            error:"Failed to create course",
        })
        return (await response).data;

    }
    catch(error){
      
        toast.error(error?.response?.data?.message);
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
          
            state.courseData=[...action.payload];
        }

    })

}

})


export default courseSlice.reducer


