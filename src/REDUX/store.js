
import { configureStore } from '@reduxjs/toolkit'

import authSliceReducer from "./Slices/authslice.js"

const store=configureStore({
    reducer:{

        auth:authSliceReducer

    },
    // jab hum deploy karenge tab alag tarah semanage karenge devtools ko
    devTools:true
})

export default store;
