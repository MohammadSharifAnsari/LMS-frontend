
import { configureStore } from '@reduxjs/toolkit'

import authSliceReducer from "./Slices/authslice.js"
import courseSliceReducer from "./Slices/Courseslice.js"
import RazorPaySliceReducer from './Slices/RazorPaySlice.js'
import lectureSliceReducer from './Slices/LectureSlice.js'
import StatsSliceReducer from './Slices/StatsSlice.js'

const store=configureStore({
    reducer:{

        auth:authSliceReducer,
        course:courseSliceReducer,
        razorpay:RazorPaySliceReducer,
        lecture:lectureSliceReducer,
        stat:StatsSliceReducer

    },
    // jab hum deploy karenge tab alag tarah semanage karenge devtools ko
    devTools:true
})

export default store;
