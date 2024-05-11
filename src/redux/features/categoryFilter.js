import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catFilter: "All",
}

const categoryFilter = createSlice({
    name:"categoryFilter",
    initialState,
    reducers:{
        changeValue: (state, action) => {
            state.catFilter = action.payload;
        }
    }
});

export const {changeValue} = categoryFilter.actions;
export default categoryFilter.reducer;