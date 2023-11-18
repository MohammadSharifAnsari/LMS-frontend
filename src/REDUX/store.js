
import { configureStore } from '@reduxjs/toolkit'

import authSliceReducer from "./Slices/authslice.js"
import courseSliceReducer from "./Slices/Courseslice.js"

const store=configureStore({
    reducer:{

        auth:authSliceReducer,
        course:courseSliceReducer

    },
    // jab hum deploy karenge tab alag tarah semanage karenge devtools ko
    devTools:true
})

export default store;
