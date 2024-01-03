import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../helper/axiosinstance";

const initialState = {
    // isLoggedIn check ki user login hai ya nhi
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    // isLoggedIn:false,
    // role show about the role of user
    role: localStorage.getItem("role") || "",
    // data me extra data regarding user store karaenge
    data: localStorage.getItem("data")!=undefined?JSON.parse(localStorage.getItem("data")) : {},
};
export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    //create account itself an object
    try {
        const res = axiosInstance.post("/user/register", data);
        // const res=await axiosInstance.post('user/register',data);
        //when toast give according to state of promise
        //res is promise
        toast.promise(res, {
            loading: "wait! your account creating",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to craet account",
        });

        return (await res).data;
    } catch (error) {
      
        toast.error(error?.response?.data?.message);
    }
});

//login is a functuion which actually return a promise
export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const res = axiosInstance.post("/user/login", data); //yahan await lagate to toast aane me bhi time lagta
        toast.promise(res, {
            loading: "wait! authentication in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to login ",
        });
        return (await res).data; //yahan se jo bhi return karega woh as it is action ke payload me exists karega extrareducer me jo action hai uske payload me .
    } catch (error) {
      
        toast.error(error?.response?.data?.message);
    }
});

export const Logout = createAsyncThunk("auth/logout", async () => {
    try {
        const res = axiosInstance.get("user/logout");

        toast.promise(res, {
            loading: "wait! logout in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to logout ",
        });

        return (await res).data;
    } catch (err) {
       
        toast.error(err?.responce?.data?.message);
    }
});

export const updateProfile = createAsyncThunk(
    "/user/update/profile",
    async (data) => {
        try {
            const res = axiosInstance.put(`/user/update/${data[0]}`, data[1]); //user ki id url me deni hogi n

            toast.promise(res, {
                loading: "wait! profile update in progress...",
                success: (data) => {
                    return data?.data?.message;
                },
                error: "Failed to update the profile ",
            });

            return (await res).data;
        } catch (err) {
          
            toast.error(err?.responce?.data?.message);
        }
    }
);
export const getUserData = createAsyncThunk(
    "/user/details",
    async () => {
        try {
            const res = axiosInstance.get('/user/me'); 
            return (await res).data;
        } catch (err) {
  
            toast.error(err?.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    //state means initial state
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                //yeh action object redux toolkit bna kar deti hai humne nhi bnaya and iska format fix hota hai
                //thunk jo return kar rha hai n woh action ke payload me chla jata hai

                localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action?.payload?.user?.role);
                state.isLoggedIn = true;
                state.data = action?.payload?.user;
                state.role = action?.payload?.user?.role;
            })
            .addCase(Logout.fulfilled, (state) => {
                localStorage.clear();

                state.isLoggedIn = false;
                state.data = {};
                state.role = "";
            })
            .addCase(getUserData.fulfilled,(state,action)=>{
               
                if(!action?.payload?.user){
                    return 
                }
                localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action?.payload?.user?.role);
                state.isLoggedIn = true;
                state.data = action?.payload?.user;
                state.role = action?.payload?.user?.role;


            });
    },
});

// export {}=authSlice.actions;
export default authSlice.reducer;
