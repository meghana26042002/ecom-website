import { configureStore } from "@reduxjs/toolkit"
import userslice from "./slices/userslice";
import userdata from "./slices/userdata";
const store = configureStore({
    reducer: { userslice, userdata }

})
export default store;