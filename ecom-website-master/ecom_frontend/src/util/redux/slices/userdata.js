import { createSlice } from "@reduxjs/toolkit";
const userdata = createSlice({
    name: 'userdata',
    initialState: {
        cartitem: [],
    },
    reducers: {
        updatedata: (state, action) => {
            const data1 = action?.payload;
            const changedata = [...state?.cartitem, data1]
            return { ...state, cartitem: changedata }
        },
        deleteItem: (state, action) => {
            const dataTobeDeleted = action?.payload;
            const index = state.cartitem.findIndex((item) => item.id === dataTobeDeleted);
            if (index !== -1) {
                state.cartitem.splice(index, 1);
            }
            //console.log(index);
        }
    }
})
export default userdata.reducer;
export const { updatedata, deleteItem } = userdata.actions
