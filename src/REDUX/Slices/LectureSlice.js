
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../helper/axiosinstance";
const initialState={
    lectures:[]
}


//cid->it is an id of course
export const  getCourseLectures=createAsyncThunk("/course/lecture/get",async (cid)=>{

    try{
const response=axiosInstance.get(`/course/${cid}`);

toast.promise(response,{
    loading:"Fetching course lectures",
    success:"Lecture fetched successfully",
    error:"Failed to load lecture"
})

return (await response).data;

    }
    catch(error){
toast.error(error?.response?.data?.message);
    }

})
export const  addCourseLectures=createAsyncThunk("/course/lecture/add",async (data)=>{

    try{

        const formData=new FormData();//yahan file ja rhi hai thats why we use formdata
           formData.append("lecture",data.lecture);
           formData.append("title",data.title);
           formData.append("description",data.description);


const response=axiosInstance.post(`/course/${data.id}`,formData);

toast.promise(response,{
    loading:"Adding course lectures",
    success:"Lecture added successfully",
    error:"Failed to add lecture"
})

return (await response).data;

    }
    catch(error){
toast.error(error?.response?.data?.message);
    }

})
export const  deleteCourseLectures=createAsyncThunk("/course/lecture/delete",async (data)=>{

    try{

const response=axiosInstance.delete(`/course?courseId=${data.courseId}&lectureId=${data.lectureId}`);

toast.promise(response,{
    loading:"Deleting course lecture",
    success:"Lecture Deleted successfully",
    error:"Failed to delete lecture"
})

return (await response).data;

    }
    catch(error){
toast.error(error?.response?.data?.message);
    }

})



const lectureSlice=createSlice({
name:'lecture',
initialState,               
reducers:{},
extraReducers:(builder)=>{

builder.addCase(getCourseLectures.fulfilled,(state,action)=>{
console.log(action);
    state.lectures=action?.payload?.lecture;

})
.addCase(addCourseLectures.fulfilled,(state,action)=>{
    console.log(action);

    state.lectures=action?.payload?.course?.lectures;
   
})

}                 
               
})

export default lectureSlice.reducer;
