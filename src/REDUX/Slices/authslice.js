import {createSlice} from '@reduxjs/toolkit'

const initialState={
    // isLoggedIn check ki user login hai ya nhi
    isLoggedIn:localStorage.getItem('isLoggedIn')||false,
    // role show about the role of user
    role:localStorage.getItem('role')||"",
    // data me extra data regarding user store karaenge 
    data:localStorage.getItem('data')||{}

}

const authSlice=createSlice({
name:'auth',
initialState,
reducers:{},

});

// export {}=authSlice.actions;
export default authSlice.reducer;

