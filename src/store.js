import { configureStore } from "@reduxjs/toolkit";

import menuReducer from '@/slice/menuSlice' 
import toolboxReducer from "@/slice/toolBoxSlice"

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        toolbox: toolboxReducer
    }
})