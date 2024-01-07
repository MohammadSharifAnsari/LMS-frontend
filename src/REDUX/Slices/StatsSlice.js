import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../helper/axiosinstance.js"

const initialState={
    allUserCount:0,
    subscribedCount:0
}

export const getStatsData=createAsyncThunk("stats/get",async ()=>{

    try {
        const response=axiosInstance.get("/admin/stats/user");
       
        toast.promise(response,
            {
                loading:"Getting the stats..",
                success:(data)=>{
                    return data?.data?.message
                },
                error:"Failed to load data stats "
            }
        )

      return (await response).data;

        
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }

})


const statSlice=createSlice({
    name:"state",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(getStatsData.fulfilled,(state,action)=>{
     
            state.allUserCount=action?.payload?.allUserCount,
            state.subscribedCount=action?.payload?.subscribedCount
             
        })

    }
    
})

export default statSlice.reducer;