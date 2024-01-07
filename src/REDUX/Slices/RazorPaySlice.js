import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../helper/axiosinstance.js"

// { object that return by thunk 
//     data:{
//         message: backend data
        
//     }
// }

const initialState={

key:"",
subscription_id:"",
isPaymentVerified:false,
allPayments:{},
finalMonths:{},
monthlySalesRecord:[]

} 

export const getRazorPayId=createAsyncThunk("/razorpay/getId",async ()=>{

try{

    const response=await axiosInstance.get("/payment/razorpay_key");

       return response.data;

}
catch(err){

    toast.error("Failed to load data");


}

})

export const purchaseCourseBundle=createAsyncThunk("/purchaseCourse",async ()=>{

try{

    const response=await axiosInstance.post("/payment/subscribe");

       return response.data;

}
catch(err){

    toast.error(err?.response?.data?.message);


}

})

export const verifyUserPayment=createAsyncThunk("/payments/verify",async (data)=>{

try{

    const response=await axiosInstance.post("/payment/verify",{
        razorpay_payment_id:data.razorpay_payment_id,
        razorpay_subscription_id:data.razorpay_subscription_id,
        razorpay_signature:data.razorpay_signature


    });
    
    
       return response.data;

}
catch(err){

    toast.error(err?.response?.data?.message);


}

})
export const getPaymentRecord=createAsyncThunk("/payments/record",async ()=>{

try{
    const response=axiosInstance.get("/payment?count=100");//100 record de dega req.param is an object
toast.promise(response,{
    loading:"Getting the payment records",
    success:(data)=>{//yeh data promise response ke resolve hone par jo data aaega woh hai
        return data?.data?.message;
    },
    error:"Failed to get payment records"
})
     
return (await response).data;

      
}
catch(err){

    toast.error("operation failed");
}

})
export const cancelCourseBundle=createAsyncThunk("/payments/cancel",async ()=>{

try{
    const response=axiosInstance.post("/payment/unsubscribe");//100 record de dega req.param is an object
toast.promise(response,{
    loading:"Unsubscribing the bundle",
    success:(data)=>{//yeh data promise response ke resolve hone par jo data aaega woh hai
        return data.data.message;
    },
    error:"Failed to unsubscribe"
})
     
return (await response).data;

      
}
catch(err){

    toast.error(err?.response?.data?.message);
}

})



const razorpaySlice=createSlice({

    name:"razorpay",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
builder
.addCase(getRazorPayId.fulfilled,(state,action)=>{
    state.key=action?.payload?.key;
})
.addCase(purchaseCourseBundle.fulfilled,(state,action)=>{

    state.subscription_id=action?.payload?.subscription_id;

})
.addCase(verifyUserPayment.fulfilled,(state,action)=>{
    toast.success(action?.payload?.message);
    state.isPaymentVerified=action?.payload?.success;
})
.addCase(verifyUserPayment.rejected,(state,action)=>{
    toast.success(action?.payload?.message);
    state.isPaymentVerified=action?.payload?.success;
})
.addCase(getPaymentRecord.fulfilled,(state,action)=>{
   
    state.allPayments=action?.payload?.payment;
state.finalMonths=action?.payload?.finalMonths;
state.monthlySalesRecord=action?.payload?.monthlySalesRecord;
})

    }


})


export default razorpaySlice.reducer;


