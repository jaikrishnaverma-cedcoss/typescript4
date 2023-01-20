import { configureStore } from "@reduxjs/toolkit";
import MySlice from "./MySlice";

const Store = configureStore({
    reducer:MySlice
})

export default Store